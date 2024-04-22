import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { DataExtractionModule } from 'src/modules/data-extraction/data-extraction.module';
import { CrawlerService } from './crawler.service';
@Module({
  imports: [ScheduleModule.forRoot(), DataExtractionModule],
  providers: [CrawlerService],
})
export class CrawlerModule {}
