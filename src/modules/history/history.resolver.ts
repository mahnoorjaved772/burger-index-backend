import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HistoryService } from './history.service';
import { History } from './entities/history.entity';
import { HistoryInput } from './dto/history.input';
import { HistoryPagination } from './dto/history-pagination.output';

@Resolver(() => History)
export class HistoryResolver {
  constructor(private readonly historyService: HistoryService) {}

  @Mutation(() => History)
  async createHistory(
    @Args('historyInput') historyInput: HistoryInput,
  ): Promise<History> {
    return this.historyService.create(historyInput);
  }

  @Query(() => [History], { name: 'findAllHistory' })
  findAll(
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
  ) {
    return this.historyService.findAll(skip, take);
  }

  @Query(() => History, { name: 'findByPlatformProductId' })
  findByPlatformProductId(
    @Args('platformProductId', { type: () => String })
    platformProductId: string,
  ) {
    return this.historyService.findByPlatformProductId(platformProductId);
  }

  @Query(() => HistoryPagination, { name: 'findByPlatformProductId' })
  findByPlatformProductIdAndPlatformStoreId(
    @Args('platformProductId', { type: () => String })
    platformProductId: string,
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('pageSize', { type: () => Int, defaultValue: 10 }) pageSize: number,
  ) {
    return this.historyService.findHistoryByPlatformProductId(
      platformProductId,
      page,
      pageSize,
    );
  }

  // @Query(() => HistoryPagination, { name: 'findAllHistory' })fplatformStoreId
  // findAllHistory(
  //   @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
  //   @Args('pageSize', { type: () => Int, defaultValue: 10 }) pageSize: number
  // ): Promise<HistoryPagination> {
  //   return this.historyService.findAllHistory(page, pageSize);
  // }
}
