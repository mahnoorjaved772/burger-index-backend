// providers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider } from './entities/provider.entity';
import { CreateProviderInput } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectRepository(Provider)
    private readonly providerRepository: Repository<Provider>,
  ) {}

  async create(createProviderInput: CreateProviderInput): Promise<Provider> {
    const provider = this.providerRepository.create(createProviderInput);
    return this.providerRepository.save(provider);
  }

  async findAll(): Promise<Provider[]> {
    return this.providerRepository.find({ relations: ['providersList'] });
  }

  async findOne(brand_id: string): Promise<Provider> {
    return this.providerRepository.findOne({ where: { brand_id } });
  }

  async findAndUpdate(
    brand_id: string,
    updateProviderInput: UpdateProviderInput,
  ): Promise<Provider> {
    const provider = await this.providerRepository.findOne({
      where: { brand_id },
    });
    return this.update(provider, updateProviderInput);
  }

  async update(
    provider: Provider,
    updateProviderInput: UpdateProviderInput,
  ): Promise<Provider> {
    Object.assign(provider, updateProviderInput);
    return this.providerRepository.save(provider);
  }

  async remove(brand_id: string): Promise<Provider> {
    const provider = await this.providerRepository.findOne({
      where: { brand_id },
    });
    return this.providerRepository.remove(provider);
  }
}
