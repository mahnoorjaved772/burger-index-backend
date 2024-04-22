import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platform } from './entities/platform.entity'; // Import your Platform entity
import { CreatePlatformInput } from './dto/create-platform.input';
import { UpdatePlatformInput } from './dto/update-platform.input';
import { isEmpty } from 'rxjs/internal/operators/isEmpty';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectRepository(Platform)
    private readonly platformRepository: Repository<Platform>,
  ) {}

  async create(createPlatformInput: CreatePlatformInput) {
    const platform = this.platformRepository.create(createPlatformInput);
    console.log('save');
    return this.platformRepository.save(platform);
  }

  async findAll() {
    return this.platformRepository.find();
  }

  async findOne(platformStoreId: string): Promise<Platform> {
    return this.platformRepository.findOne({ where: { platformStoreId } });
  }
  
  async findAndUpdate(
    platformStoreId: string,
    updatePlatformInput: UpdatePlatformInput,
  ): Promise<Platform> {
    const platform = await this.platformRepository.findOne({
      where: { platformStoreId },
    });
    return this.update(platform, updatePlatformInput);
  }

  async update(
    platform: Platform,
    updatePlatformInput: UpdatePlatformInput,
  ): Promise<Platform> {
    Object.assign(platform, updatePlatformInput);
    return this.platformRepository.save(platform);
  }
}
