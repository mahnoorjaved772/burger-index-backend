import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ZIP_FILE_PATH } from 'src/common/constants';
import { DataExtractionService } from 'src/modules/data-extraction/data-extraction.service';
@Injectable()
export class CrawlerService {
  constructor(private dataExtractionService: DataExtractionService) {}

  @Cron('30 23 * * * *')
  async handleCron() {
    try {
      console.log('cron job Started');
      console.log('ZIP_FILE_PATH', ZIP_FILE_PATH);
      await this.dataExtractionService.readZipFiles(ZIP_FILE_PATH, true);
    } catch (error) {
      console.error('Error processing ZIP file:', error);
    }
  }
}
