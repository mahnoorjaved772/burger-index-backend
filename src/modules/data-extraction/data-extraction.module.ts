import { Module } from '@nestjs/common';
import { DataExtractionService } from './data-extraction.service';
import { DataProcessingModule } from 'src/modules/data-processing/data-processing.module';
import { DataSyncingModule } from 'src/modules/data-syncing/data-syncing.module';
import { PlatformModule } from '../platforms/platforms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Platform } from '../platforms/entities/platform.entity';
@Module({
  imports: [
    DataProcessingModule,
    DataSyncingModule,
    PlatformModule,
    TypeOrmModule.forFeature([Platform]),
  ],
  providers: [DataExtractionService],
  exports: [DataExtractionService],
})
export class DataExtractionModule {}
