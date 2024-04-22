import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProvidersService } from './providers.service';
import { Provider } from './entities/provider.entity';
import { CreateProviderInput } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';

@Resolver(() => Provider)
export class ProvidersResolver {
  constructor(private readonly providersService: ProvidersService) {}

  @Mutation(() => Provider)
  createProvider(
    @Args('createProviderInput') createProviderInput: CreateProviderInput,
  ) {
    return this.providersService.create(createProviderInput);
  }

  @Query(() => [Provider], { name: 'providers' })
  findAll() {
    return this.providersService.findAll();
  }
  @Query(() => Provider)
  async provider(@Args('brand_id') brand_id: string): Promise<Provider> {
    return this.providersService.findOne(brand_id);
  }

  @Mutation(() => Provider)
  updateProvider(
    @Args('updateProviderInput') updateProviderInput: UpdateProviderInput,
  ) {
    return this.providersService.findAndUpdate(
      updateProviderInput.brand_id,
      updateProviderInput,
    );
  }
}
