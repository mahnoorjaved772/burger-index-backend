/// <reference types="node" />
import * as JSZip from 'jszip';
import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Platform } from 'src/modules/platforms/entities/platform.entity';
import { DataSyncingService } from 'src/modules/data-syncing/data-syncing.service';
export declare class DataExtractionService implements OnModuleInit {
    private readonly platformRepository;
    private dataSyncingService;
    private readonly logger;
    constructor(platformRepository: Repository<Platform>, dataSyncingService: DataSyncingService);
    onModuleInit(): Promise<void>;
    readZipFiles(filePath: string, todayOnly: boolean): Promise<void>;
    processZipContent(zip: JSZip, data: Buffer, todayOnly: boolean): Promise<void>;
    extractFiles(zip: JSZip, today: string, todayOnly: boolean): Promise<void>;
    handleNestedZip(file: JSZip.JSZipObject, fullPath: string, today: string, todayOnly: boolean): Promise<void>;
    removeDuplicates(data: any[]): any[];
}
