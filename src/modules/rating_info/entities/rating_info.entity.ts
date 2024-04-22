import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Field, ObjectType, Float, Int } from '@nestjs/graphql';
import { Provider } from 'src/modules/providers/entities/provider.entity';

@Entity()
@ObjectType()
export class RatingInfo {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('float', { nullable: false })
  @Field(() => Float)
  platformStoreRating: number;

  @Column('int', { nullable: true })
  @Field(() => Int)
  rating: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brand_id?: string;

  @Column('int', { nullable: true })
  @Field(() => Int)
  totalRating: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  detailsLabel?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  totalRatingLabel?: string;

  @ManyToOne(() => Provider, (provider) => provider.ratingInfo, {
    nullable: true,
  })
  @Field(() => Provider)
  @JoinColumn({ name: 'brand_id' })
  providerId: Provider;
}
