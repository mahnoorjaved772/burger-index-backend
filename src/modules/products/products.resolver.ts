import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductSearchResults } from './dto/search-product.input';
import { SearchService } from '../search/search.service';
import { ProductPagination } from './dto/product.pagination.output';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly searchService: SearchService,
  ) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => ProductPagination, { name: 'allProducts' })
  async findAllProducts(
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('pageSize', { type: () => Int, defaultValue: 10 }) pageSize: number,
  ): Promise<ProductPagination> {
    return this.productsService.findAll(page, pageSize);
  }

  @Query(() => Product, { nullable: true })
  async product(
    @Args('platformProductId') platformProductId: string,
  ): Promise<Product> {
    return this.productsService.findOne(platformProductId);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('platformProductId') platformProductId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productsService.findAndUpdate(
      platformProductId,
      updateProductInput,
    );
  }

  @Query(() => ProductSearchResults, { name: 'searchProducts' })
  async searchProducts(
    @Args('query', { type: () => String }) query: string,
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('pageSize', { type: () => Int, defaultValue: 10 }) pageSize: number,
  ): Promise<ProductSearchResults> {
    return this.productsService.searchProducts(query, page, pageSize);
  }
}
