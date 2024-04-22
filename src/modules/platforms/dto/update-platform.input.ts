import { InputType, Field, ID } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsUUID,
  IsUrl,
} from 'class-validator';

@InputType()
export class UpdatePlatformInput {
  @Field(() => ID, { nullable: true })
  @IsUUID()
  platformStoreId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  platform?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  platformStoreName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  platformStoreDescription?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  platformStoreAddress?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsUrl()
  platformStoreUrl?: string;
}
