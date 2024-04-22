import { Module } from '@nestjs/common';
import { DataSyncingService } from './data-syncing.service';
import { DataProcessingModule } from 'src/modules/data-processing/data-processing.module';

@Module({
  imports: [DataProcessingModule],
  providers: [DataSyncingService],
  exports: [DataSyncingService],
})
export class DataSyncingModule {}
