import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';

@ObjectType()
export class ProductPagination {
  @Field(() => [Product])
  items: Product[];

  @Field(() => Int)
  totalCount: number;

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  pageSize: number;
}
