import { ObjectType, Field, Int } from '@nestjs/graphql';
import { History } from '../entities/history.entity';

@ObjectType()
export class HistoryPagination {
  @Field(() => [History])
  items: History[];

  @Field(() => Int)
  totalCount: number;

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  pageSize: number;
}
