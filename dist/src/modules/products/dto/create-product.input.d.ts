export declare class CreateProductInput {
    platformProductId: string;
    platform: string;
    name: string;
    description?: string;
    imageUrl?: string;
    isAvailable?: boolean;
    isPopular?: boolean;
    isSoldOut?: boolean;
    currency?: string;
    price: number;
    discountedPrice?: number;
    discountAmount?: number;
    priceDiscountPercent?: number;
    providerId?: string;
}
