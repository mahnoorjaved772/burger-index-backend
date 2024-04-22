import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RatingInfoService } from './rating_info.service';
import { RatingInfo } from './entities/rating_info.entity';
import { CreateRatingInfoInput } from './dto/create-rating_info.input';
import { UpdateRatingInfoInput } from './dto/update-rating_info.input';

@Resolver(() => RatingInfo)
export class RatingInfoResolver {
  constructor(private readonly ratingInfoService: RatingInfoService) {}

  @Mutation(() => RatingInfo)
  createRatingInfo(
    @Args('createRatingInfoInput') createRatingInfoInput: CreateRatingInfoInput,
  ) {
    return this.ratingInfoService.create(createRatingInfoInput);
  }

  @Query(() => [RatingInfo])
  ratingInfo() {
    return this.ratingInfoService.findAll();
  }

  @Query(() => RatingInfo, { name: 'ratingInfo' })
  findOne(@Args('id') id: string) {
    return this.ratingInfoService.findOne(id);
  }

  @Mutation(() => RatingInfo)
  updateRatingInfo(
    @Args('updateRatingInfoInput') updateRatingInfoInput: UpdateRatingInfoInput,
  ) {
    return this.ratingInfoService.FindAndUpdate(
      updateRatingInfoInput.id,
      updateRatingInfoInput,
    );
  }

  @Mutation(() => RatingInfo)
  removeRatingInfo(@Args('id') id: string) {
    return this.ratingInfoService.remove(id);
  }
}
