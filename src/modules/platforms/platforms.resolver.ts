import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PlatformsService } from './platforms.service';
import { Platform } from './entities/platform.entity';
import { CreatePlatformInput } from './dto/create-platform.input';
import { UpdatePlatformInput } from './dto/update-platform.input';
import { Provider } from 'src/modules/providers/entities/provider.entity';

@Resolver(() => Platform)
export class PlatformsResolver {
  platformRepository: any;
  constructor(private readonly platformsService: PlatformsService) {}

  @Mutation(() => Platform)
  createPlatform(
    @Args('createPlatformInput') createPlatformInput: CreatePlatformInput,
  ) {
    return this.platformsService.create(createPlatformInput);
  }

  @Query(() => [Platform], { name: 'platforms' })
  findAll() {
    return this.platformsService.findAll();
  }

  @Query(() => Platform, { nullable: true })
  async platform(
    @Args('platformStoreId') platformStoreId: string,
  ): Promise<Platform> {
    return this.platformsService.findOne(platformStoreId);
  }

  @Mutation(() => Platform)
  async updatePlatform(
    @Args('platformStoreId') platformStoreId: string,
    @Args('updatePlatformInput') updatePlatformInput: UpdatePlatformInput,
  ) {
    return this.platformsService.findAndUpdate(
      platformStoreId,
      updatePlatformInput,
    );
  }
  @ResolveField(() => [Provider], { nullable: true })
  async providersList(@Parent() platform: Platform): Promise<Provider[]> {
    return platform.providersList;
  }
}
