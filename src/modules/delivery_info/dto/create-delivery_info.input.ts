import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';

@InputType()
export class CreateDeliveryInfoInput {
  @IsOptional()
  @IsUUID()
  @Field(() => String, { nullable: true })
  deliveryInfoId?: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  supportedStrategy?: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  platform: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  serviceFee: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  highestMinBasketSurcharge?: number | null;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  brand_id?: string | null;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  reference?: string | null;
}
