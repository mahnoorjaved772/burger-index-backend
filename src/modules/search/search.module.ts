import { Module, OnModuleInit } from '@nestjs/common';
import {
  ElasticsearchModule,
  ElasticsearchService,
} from '@nestjs/elasticsearch';
import { SearchService } from './search.service';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useFactory: () => ({
        node: 'https://b07a4d530ac44a6a8b33f0951085027b.us-central1.gcp.cloud.es.io:9243', 
        cloudId:
          '1abced926b2046f49019c61e0f3ec7ff:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRhYTA1NjRiYzE1Y2I0NTJhYjEwODAyMWQ0OGZkODMwOSRiMDdhNGQ1MzBhYzQ0YTZhOGIzM2YwOTUxMDg1MDI3Yg==',
        auth: {
          username: 'elastic',
          password: '11ABJ0bXB1YKn09DK26hH3W0',
        },
      }),
    }),
  ],
  providers: [SearchService],
  exports: [SearchService], 
})
export class SearchModule {}
