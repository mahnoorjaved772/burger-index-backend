import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class History {
  @PrimaryGeneratedColumn('uuid')
  @Field({ nullable: true })
  id: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  neighbourhood?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phoneNumberOne?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phoneNumberTwo?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  cityCode?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  cityName?: string;

  @Column({ type: 'int', nullable: true })
  @Field(() => Int, { nullable: true })
  rating?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreRating?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  totalRating?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platform?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreId?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brand_id?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreName?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreDescription?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreAddress?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreUrl?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformProductId?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  isAvailable?: boolean;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  isPopular?: boolean;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  isSoldOut?: boolean;

  @Column({ nullable: true })
  @Field({ nullable: true })
  currency?: string;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float, { nullable: true })
  price?: number;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float, { nullable: true })
  discountedPrice?: number;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float, { nullable: true })
  discountAmount?: number;

  @Column({ nullable: true })
  @Field(() => Float, { nullable: true })
  priceDiscountPercent?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  scrapeDate?: string;
}
