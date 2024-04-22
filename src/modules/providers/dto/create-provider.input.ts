// create-provider.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProviderInput {
  @Field()
  brand_id?: string;

  @Field({ nullable: true })
  platformStoreDescription?: string;

  @Field({ nullable: true })
  neighbourhood?: string;

  @Field()
  phoneNumberOne: string;

  @Field({ nullable: true })
  phoneNumberTwo?: string;

  @Field()
  type: string;

  @Field()
  cityCode: number;

  @Field()
  imageUrl: string;

  @Field({ nullable: true })
  platformStoreId: string;

  @Field()
  cityName: string;

  @Field()
  scrape_date: string;

  @Field(() => [String], { nullable: true })
  categoryTags?: string[];
}
