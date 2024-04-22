import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
  IsInt,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';

@InputType()
export class UpdateDeliveryInfoInput {
  @IsOptional()
  @Field({ nullable: true })
  @Field(() => String, { nullable: true })
  deliveryInfoId: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  supportedStrategy?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  platform?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  serviceFee?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  highestMinBasketSurcharge?: number | null;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  reference?: string | null;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  brand_id?: string | null;
}
