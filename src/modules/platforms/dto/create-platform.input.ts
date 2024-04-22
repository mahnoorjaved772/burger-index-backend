import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  IsUrl,
  IsBoolean,
} from 'class-validator';
import { CreateProviderInput } from 'src/modules/providers/dto/create-provider.input';

@InputType()
export class CreatePlatformInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  platform: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  platformStoreId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  platformStoreName: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  platformStoreDescription?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  platformStoreUrl?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  platformStoreAddress?: string;
}
