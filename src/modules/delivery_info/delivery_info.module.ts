import { Module } from '@nestjs/common';
import { DeliveryInfoService } from './delivery_info.service';
import { DeliveryInfoResolver } from './delivery_info.resolver';
import { DeliveryInfo } from './entities/delivery_info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryInfo])],
  providers: [DeliveryInfoResolver, DeliveryInfoService],
  exports: [DeliveryInfoService],
})
export class DeliveryInfoModule {}
