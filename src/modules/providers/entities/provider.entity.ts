// provider.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Platform } from 'src/modules/platforms/entities/platform.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { RatingInfo } from 'src/modules/rating_info/entities/rating_info.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Provider {
  @PrimaryColumn()
  @Field(() => String)
  brand_id: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreDescription?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  neighbourhood?: string;

  @Column()
  @Field()
  scrape_date: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phoneNumberOne: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phoneNumberTwo?: string;

  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  cityCode: number;

  @Column()
  @Field()
  imageUrl: string;

  @Column()
  @Field()
  cityName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreId: string;

  @Column('json', { nullable: true })
  @Field(() => [String], { nullable: true })
  categoryTags: string[] | null;

  @ManyToOne(() => Platform, (platform) => platform.providersList)
  @JoinColumn({ name: 'platformStoreId' }) // Explicitly define the join column
  @Field(() => Platform)
  platform: Platform;

  @OneToMany(() => Product, (product) => product.provider)
  @Field(() => [Product], { nullable: true })
  products?: Product[];

  @OneToMany(() => RatingInfo, (ratingInfo) => ratingInfo.providerId) // Corrected relationship
  @Field(() => [RatingInfo], { nullable: true })
  ratingInfo: RatingInfo[];
}
