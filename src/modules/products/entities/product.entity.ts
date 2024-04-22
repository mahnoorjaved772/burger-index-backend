import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Provider } from 'src/modules/providers/entities/provider.entity';
import { MaxLength } from 'class-validator';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  platformProductId: string;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platform: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  @MaxLength(255)
  imageUrl?: string;

  @Column({ default: true })
  @Field({ defaultValue: true })
  isAvailable: boolean = true;

  @Column({ default: false })
  @Field({ defaultValue: false })
  isPopular: boolean = false;

  @Column({ default: false })
  @Field({ defaultValue: false })
  isSoldOut: boolean = false;

  @Column({ nullable: true })
  @Field({ nullable: true })
  currency?: string;

  @Column()
  @Field()
  price: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  discountedPrice?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  providerId?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  discountAmount?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  priceDiscountPercent?: number;

  @ManyToOne(() => Provider, (provider) => provider.products, {
    nullable: true,
  })
  @JoinColumn({ name: 'providerId' }) // Explicitly define the join column as "providerId"
  @Field(() => Provider, { nullable: true })
  provider?: Provider;
}
