import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class DeliveryInfo {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  deliveryInfoId: string;

  @Column({ default: 'DELIVERY' })
  @Field()
  supportedStrategy: string;

  @Column()
  @Field()
  platform: string;

  @Column()
  @Field(() => Int)
  serviceFee: number;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  highestMinBasketSurcharge?: number | null;

  @Column({ nullable: true })
  @Field({ nullable: true })
  reference?: string | null;

  @Column({ nullable: true })
  @Field({ nullable: true })
  brand_id?: string;
}
