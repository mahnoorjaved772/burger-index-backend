import { PlatformsService } from './platforms.service';
import { Platform } from './entities/platform.entity';
import { CreatePlatformInput } from './dto/create-platform.input';
import { UpdatePlatformInput } from './dto/update-platform.input';
import { Provider } from 'src/modules/providers/entities/provider.entity';
export declare class PlatformsResolver {
    private readonly platformsService;
    platformRepository: any;
    constructor(platformsService: PlatformsService);
    createPlatform(createPlatformInput: CreatePlatformInput): Promise<Platform>;
    findAll(): Promise<Platform[]>;
    platform(platformStoreId: string): Promise<Platform>;
    updatePlatform(platformStoreId: string, updatePlatformInput: UpdatePlatformInput): Promise<Platform>;
    providersList(platform: Platform): Promise<Provider[]>;
}
