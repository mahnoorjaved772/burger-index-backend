import { ProvidersService } from './providers.service';
import { Provider } from './entities/provider.entity';
import { CreateProviderInput } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';
export declare class ProvidersResolver {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    createProvider(createProviderInput: CreateProviderInput): Promise<Provider>;
    findAll(): Promise<Provider[]>;
    provider(brand_id: string): Promise<Provider>;
    updateProvider(updateProviderInput: UpdateProviderInput): Promise<Provider>;
}
