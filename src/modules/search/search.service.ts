import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Client } from '@elastic/elasticsearch';
import { CreateProductInput } from '../products/dto/create-product.input';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class SearchService {
  private readonly eSclient: Client;

  constructor(private readonly esService: ElasticsearchService) {
    this.eSclient = new Client({
      node: 'https://dd99d274256a492fa7976fe0ddd3fe5e.us-central1.gcp.cloud.es.io:443',
      auth: {
        apiKey: 'QlpNR0FZOEJMRDhBQlpVSTliS2I6SWg0Z2FlVzlRZEdaVEJVcWRmTG1kdw==',
      },
    });
  }

  // async onModuleInit() {
  //   this.checkElasticConnection();
  //   // this.addIndex(products[0]);
  //   let answer = await this.search('Ice', 1, 10);
  //   console.log('answer', answer);
  // }

  async checkElasticConnection() {
    const resp = await this.eSclient.info();
    console.log(resp);
  }

  async addIndex(product: CreateProductInput) {
    const result = await this.eSclient.helpers.bulk({
      datasource: [product],
      onDocument: (doc) => ({
        index: { _index: 'platform_pname_index' },
        data: {
          platformProductId: doc.platformProductId,
          name: doc.name,
          description: doc.description,
          price: doc.price,
        },
      }),
    });
    console.log('result ====>', result);
  }

  async search(query, page = 1, pageSize = 10) {
    const from = (page - 1) * pageSize;
    const searchResult = await this.eSclient.search({
      index: 'platform_pname_index',
      body: {
        query: {
          multi_match: {
            query: query,
            fields: ['platform', 'name'],
          },
        },
        from: from,
        size: pageSize,
      },
    });

    // Map results to source
    const hits = searchResult.hits.hits.map((hit) => hit._source as Product);
    const total =
      typeof searchResult.hits.total === 'number'
        ? searchResult.hits.total
        : searchResult.hits.total.value;

    console.log('Hits: ', hits);
    console.log('Total: ', total);

    // Return formatted result
    return {
      hits: hits,
      total: total,
      page: page,
      pageSize: pageSize,
    };
  }
}
