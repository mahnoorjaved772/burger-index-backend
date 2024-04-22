import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsBoolean,
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  platformProductId: string;

  @Field({ nullable: true })
  platform: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isPopular?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isSoldOut?: boolean;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  currency?: string;

  @Field(() => Float)
  @IsNumber()
  price: number;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  discountedPrice?: number;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  discountAmount?: number;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  priceDiscountPercent?: number;

  @Field({ nullable: true })
  providerId?: string;
}
