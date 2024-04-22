import * as JSZip from 'jszip';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ZIP_FILE_PATH } from 'src/common/constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platform } from 'src/modules/platforms/entities/platform.entity';
import { DataSyncingService } from 'src/modules/data-syncing/data-syncing.service';

@Injectable()
export class DataExtractionService implements OnModuleInit {
  private readonly logger = new Logger(DataExtractionService.name);

  constructor(
    @InjectRepository(Platform)
    private readonly platformRepository: Repository<Platform>,
    private dataSyncingService: DataSyncingService,
  ) {}

  async onModuleInit() {
    this.logger.log('Module initialized, starting ZIP file processing...');
    const count = await this.platformRepository.count();
    if (count === 0) {
      this.logger.log('Seeding initial data...');
      await this.readZipFiles(ZIP_FILE_PATH, false);
    }
  }

  async readZipFiles(filePath: string, todayOnly: boolean) {
    this.logger.log(`Reading the main ZIP file from: ${filePath}`);
    try {
      const data = await fs.readFile(filePath);
      const zip = new JSZip();
      await this.processZipContent(zip, data, todayOnly);
    } catch (error) {
      this.logger.error('Error loading ZIP file:', error);
    }
  }

  async processZipContent(zip: JSZip, data: Buffer, todayOnly: boolean) {
    const today = new Date().toISOString().split('T')[0].replace(/-/g, '_'); // Format YYYY_MM_DD
    try {
      await zip.loadAsync(data);
      await this.extractFiles(zip, today, todayOnly);
    } catch (error) {
      this.logger.error('Error processing ZIP content:', error);
    }
  }

  async extractFiles(zip: JSZip, today: string, todayOnly: boolean) {
    for (const filename of Object.keys(zip.files)) {
      const file = zip.files[filename];
      if (file.dir || filename.includes('__MACOSX')) continue;

      const fullPath = path.join(filename);
      if (path.extname(filename) === '.zip') {
        await this.handleNestedZip(file, fullPath, today, todayOnly);
      } else if (filename.endsWith('.json')) {
        this.logger.log('Found JSON file:', fullPath);
        const content = await file.async('string');
        const jsonData = JSON.parse(content);
        const uniqueData = this.removeDuplicates(jsonData);
        this.dataSyncingService.processData(uniqueData);
        this.logger.log(`Processed and stored data from ${fullPath}`);
      }
    }
  }

  async handleNestedZip(
    file: JSZip.JSZipObject,
    fullPath: string,
    today: string,
    todayOnly: boolean,
  ) {
    this.logger.log(
      `Checking nested ZIP file: ${fullPath} for today's date: ${today}`,
    );
    if (!todayOnly || (todayOnly && file.name.includes(today))) {
      this.logger.log(`Processing nested ZIP file: ${fullPath}`);
      try {
        const innerZipContent = await file.async('nodebuffer');
        const innerZip = new JSZip();
        await this.processZipContent(innerZip, innerZipContent, todayOnly);
      } catch (error) {
        this.logger.error(
          `Error reading nested ZIP file at ${fullPath}:`,
          error,
        );
      }
    } else {
      this.logger.log(
        `Skipping nested ZIP file without today's date: ${file.name}`,
      );
    }
  }

  removeDuplicates(data: any[]) {
    const uniqueRecords = new Map();
    data.forEach((item) => {
      const key = `${item.scrape_date}_${item.platformStoreId}`;
      if (!uniqueRecords.has(key)) {
        uniqueRecords.set(key, item);
      }
    });
    return Array.from(uniqueRecords.values());
  }
}
