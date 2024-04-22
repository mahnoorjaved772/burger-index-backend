import { Repository } from 'typeorm';
import { Platform } from './entities/platform.entity';
import { CreatePlatformInput } from './dto/create-platform.input';
import { UpdatePlatformInput } from './dto/update-platform.input';
export declare class PlatformsService {
    private readonly platformRepository;
    constructor(platformRepository: Repository<Platform>);
    create(createPlatformInput: CreatePlatformInput): Promise<Platform>;
    findAll(): Promise<Platform[]>;
    findOne(platformStoreId: string): Promise<Platform>;
    findAndUpdate(platformStoreId: string, updatePlatformInput: UpdatePlatformInput): Promise<Platform>;
    update(platform: Platform, updatePlatformInput: UpdatePlatformInput): Promise<Platform>;
}
