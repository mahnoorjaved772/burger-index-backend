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
    //You can create env file or past directly your creds in order to run code
    TypeOrmModule.forRoot({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
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
