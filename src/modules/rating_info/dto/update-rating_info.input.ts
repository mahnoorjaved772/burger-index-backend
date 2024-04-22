import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateRatingInfoInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Float, { nullable: true })
  platformStoreRating?: number;

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field(() => Int, { nullable: true })
  totalRating?: number;

  @Field({ nullable: true })
  detailsLabel?: string;

  @Field({ nullable: true })
  totalRatingLabel?: string;

  @Field({ nullable: true })
  brand_id: string;
}
