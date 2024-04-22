import { Repository } from 'typeorm';
import { Provider } from './entities/provider.entity';
import { CreateProviderInput } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';
export declare class ProvidersService {
    private readonly providerRepository;
    constructor(providerRepository: Repository<Provider>);
    create(createProviderInput: CreateProviderInput): Promise<Provider>;
    findAll(): Promise<Provider[]>;
    findOne(brand_id: string): Promise<Provider>;
    findAndUpdate(brand_id: string, updateProviderInput: UpdateProviderInput): Promise<Provider>;
    update(provider: Provider, updateProviderInput: UpdateProviderInput): Promise<Provider>;
    remove(brand_id: string): Promise<Provider>;
}
