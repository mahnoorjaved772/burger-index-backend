import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingInfoService } from './rating_info.service';
import { RatingInfoResolver } from './rating_info.resolver';
import { ProvidersModule } from 'src/modules/providers/providers.module';
import { RatingInfo } from './entities/rating_info.entity'; // Ensure this path is correct

@Module({
  imports: [
    ProvidersModule,
    TypeOrmModule.forFeature([RatingInfo]), // Import TypeOrmModule for RatingInfo
  ],
  providers: [RatingInfoResolver, RatingInfoService],
  exports: [RatingInfoService],
})
export class RatingInfoModule {}
