import { Provider } from 'src/modules/providers/entities/provider.entity';
export declare class Product {
    platformProductId: string;
    name: string;
    platform: string;
    description?: string;
    imageUrl?: string;
    isAvailable: boolean;
    isPopular: boolean;
    isSoldOut: boolean;
    currency?: string;
    price: number;
    discountedPrice?: number;
    providerId?: string;
    discountAmount?: number;
    priceDiscountPercent?: number;
    provider?: Provider;
}
