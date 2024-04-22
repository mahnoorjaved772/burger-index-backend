import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';
@ObjectType()
export class ProductSearchResults {
  @Field((type) => [Product])
  items: Product[];

  @Field((type) => Int)
  totalCount: number;

  @Field((type) => Int)
  page: number;

  @Field((type) => Int)
  pageSize: number;
}
