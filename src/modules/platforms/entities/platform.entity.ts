import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Provider } from 'src/modules/providers/entities/provider.entity';
import { platform } from 'os';
import { CreateProviderInput } from 'src/modules/providers/dto/create-provider.input';

@Entity()
@ObjectType()
export class Platform {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  platformStoreId: string;

  @Column()
  @Field()
  platform: string;

  @Column()
  @Field()
  platformStoreName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreDescription?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreAddress?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  platformStoreUrl?: string;

  @OneToMany(() => Provider, (provider) => provider.platform, {
    nullable: true,
  })
  @Field(() => [Provider], { nullable: true })
  providersList?: Provider[];
}
