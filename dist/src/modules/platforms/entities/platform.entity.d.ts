import { Provider } from 'src/modules/providers/entities/provider.entity';
export declare class Platform {
    platformStoreId: string;
    platform: string;
    platformStoreName: string;
    platformStoreDescription?: string;
    platformStoreAddress?: string;
    platformStoreUrl?: string;
    providersList?: Provider[];
}
