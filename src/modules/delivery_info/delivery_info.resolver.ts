import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeliveryInfoService } from './delivery_info.service';
import { DeliveryInfo } from './entities/delivery_info.entity';
import { CreateDeliveryInfoInput } from './dto/create-delivery_info.input';
import { UpdateDeliveryInfoInput } from './dto/update-delivery_info.input';

@Resolver(() => DeliveryInfo)
export class DeliveryInfoResolver {
  constructor(private readonly deliveryInfoService: DeliveryInfoService) {}

  @Mutation(() => DeliveryInfo)
  createDeliveryInfo(
    @Args('createDeliveryInfoInput')
    createDeliveryInfoInput: CreateDeliveryInfoInput,
  ) {
    return this.deliveryInfoService.create(createDeliveryInfoInput);
  }

  @Query(() => [DeliveryInfo], { name: 'deliveryInfo' })
  findAll() {
    return this.deliveryInfoService.findAll();
  }

  @Query(() => DeliveryInfo, { name: 'deliveryInfo' })
  findOne(@Args('id') id: string) {
    return this.deliveryInfoService.findOne(id);
  }

  @Query(() => DeliveryInfo, { nullable: true })
  async deliveryInfo(@Args('id') id: string): Promise<DeliveryInfo> {
    return this.deliveryInfoService.findOne(id);
  }

  // @Mutation(() => DeliveryInfo)
  // updateDeliveryInfo(@Args('updateDeliveryInfoInput') updateDeliveryInfoInput: UpdateDeliveryInfoInput) {
  //   return this.deliveryInfoService.update(updateDeliveryInfoInput.id, updateDeliveryInfoInput);
  // }

  // @Mutation(() => DeliveryInfo)
  // removeDeliveryInfo(@Args('id', { type: () => Int }) id: number) {
  //   return this.deliveryInfoService.remove(id);
  // }
}
