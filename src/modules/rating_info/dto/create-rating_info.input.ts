import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateRatingInfoInput {
  @Field(() => Float)
  platformStoreRating: number;

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field(() => Int, { nullable: true })
  totalRating?: number;

  @Field({ nullable: true })
  detailsLabel?: string;

  @Field({ nullable: true })
  totalRatingLabel?: string;

  @Field(() => String)
  brand_id: string;
}
