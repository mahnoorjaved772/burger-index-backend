// update-provider.input.ts
import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateProviderInput {
  @Field(() => ID, { nullable: true })
  @IsUUID()
  brand_id?: string;

  @Field({ nullable: true })
  platformStoreDescription?: string;

  @Field({ nullable: true })
  neighbourhood?: string;

  @Field({ nullable: true })
  phoneNumberOne?: string;

  @Field({ nullable: true })
  phoneNumberTwo?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  cityCode?: number;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  cityName?: string;

  @Field({ nullable: true })
  scrape_date?: string;

  @Field({ nullable: true })
  platformStoreId: string;

  @Field(() => [String], { nullable: true })
  categoryTags?: string[];
}
