import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PlatformModule } from './modules/platforms/platforms.module';
import { ProvidersModule } from './modules/providers/providers.module';
import { ProductsModule } from './modules/products/products.module';
import { DataExtractionModule } from './modules/data-extraction/data-extraction.module';
import { DataProcessingModule } from './modules/data-processing/data-processing.module';
import { DeliveryInfoModule } from './modules/delivery_info/delivery_info.module';
import { RatingInfoModule } from './modules/rating_info/rating_info.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CrawlerModule } from './modules/crawler-job/crawler.module';
import { SearchModule } from './modules/search/search.module';
import { HistoryModule } from './modules/history/history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'burger_index9',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
    }),
    ScheduleModule.forRoot(),
    PlatformModule,
    ProvidersModule,
    ProductsModule,
    DataExtractionModule,
    DataProcessingModule,
    DeliveryInfoModule,
    RatingInfoModule,
    CrawlerModule,
    SearchModule,
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
