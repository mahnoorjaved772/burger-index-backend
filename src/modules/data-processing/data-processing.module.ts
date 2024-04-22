// data-processing.module.ts
import { Module } from '@nestjs/common';
import { DataProcessService } from './data-processing.service';
import { ProductsModule } from 'src/modules/products/products.module';
import { ProvidersModule } from 'src/modules/providers/providers.module';
import { PlatformModule } from 'src/modules/platforms/platforms.module';
import { DeliveryInfoModule } from 'src/modules/delivery_info/delivery_info.module';
import { RatingInfoModule } from 'src/modules/rating_info/rating_info.module';
import { HistoryModule } from '../history/history.module';
import { SearchModule } from '../search/search.module';

@Module({
  imports: [
    PlatformModule, 
    ProductsModule, 
    ProvidersModule, 
    DeliveryInfoModule,
    RatingInfoModule,
    HistoryModule,
    SearchModule,
  ],
  providers: [DataProcessService],
  exports: [DataProcessService], 
})
export class DataProcessingModule {}
