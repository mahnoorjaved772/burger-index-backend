import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CreateProductInput } from '../products/dto/create-product.input';
import { Product } from '../products/entities/product.entity';
export declare class SearchService {
    private readonly esService;
    private readonly eSclient;
    constructor(esService: ElasticsearchService);
    checkElasticConnection(): Promise<void>;
    addIndex(product: CreateProductInput): Promise<void>;
    search(query: any, page?: number, pageSize?: number): Promise<{
        hits: Product[];
        total: number;
        page: number;
        pageSize: number;
    }>;
}
