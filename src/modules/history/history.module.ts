import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryResolver } from './history.resolver';
import { History } from './entities/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [HistoryResolver, HistoryService],
  exports: [HistoryService],
})
export class HistoryModule {}
