import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Client } from '@elastic/elasticsearch'; // Import Elasticsearch client
import { SearchService } from '../search/search.service';
import { ProductSearchResults } from './dto/search-product.input';
import { ProductPagination } from './dto/product.pagination.output';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly searchService: SearchService,
  ) {}

  async create(createProductInput: CreateProductInput): Promise<Product> {
    const product = this.productRepository.create(createProductInput);
    await this.productRepository.save(product);
    return product;
  }

 
  async findAll(page: number, pageSize: number): Promise<ProductPagination> {
    const skip = (page - 1) * pageSize;

    const [items, totalCount] = await this.productRepository.findAndCount({
      skip,
      take: pageSize,
    });

    return {
      items,
      totalCount,
      page,
      pageSize,
    };
  }
  
  async findOne(platformProductId: string): Promise<Product> {
    return this.productRepository.findOne({ where: { platformProductId } });
  }

  async findAndUpdate(
    platformProductId: string,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    const product = await this.findOne(platformProductId);
    return this.update(product, updateProductInput);
  }

  async update(
    product: Product,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    Object.assign(product, updateProductInput);
    return product;
  }

  async searchProducts(
    query: string,
    page: number,
    pageSize: number,
  ): Promise<ProductSearchResults> {
    const result = await this.searchService.search(query, page, pageSize);
    return {
      items: result.hits,
      totalCount: result.total,
      page: page,
      pageSize: pageSize,
    };
  }
}
