import { InputType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
  IsInt,
  IsBoolean,
  IsDecimal,
  ValidateIf,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';

@InputType()
export class HistoryInput {
  @Field({ nullable: true })
  id: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  type?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  neighbourhood?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  phoneNumberOne?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  phoneNumberTwo?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  cityCode?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  imageUrl?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  cityName?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  rating?: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platformStoreRating?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  totalRating?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platform?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platformStoreId?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  brand_id?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platformStoreName?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platformStoreDescription?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platformStoreAddress?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platformStoreUrl?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platformProductId?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  description?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isPopular?: boolean;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  isSoldOut?: boolean;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  currency?: string;

  @IsOptional()
  @IsDecimal()
  @Field(() => Float, { nullable: true })
  price?: number;

  @IsOptional()
  @IsDecimal()
  @Field(() => Float, { nullable: true })
  discountedPrice?: number;

  @IsOptional()
  @IsDecimal()
  @Field(() => Float, { nullable: true })
  discountAmount?: number;

  @IsOptional()
  @IsDecimal()
  @Field(() => Float, { nullable: true })
  priceDiscountPercent?: number;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  scrapeDate?: string;
}
