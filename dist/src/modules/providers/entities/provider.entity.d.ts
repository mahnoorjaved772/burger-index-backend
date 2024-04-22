import { Platform } from 'src/modules/platforms/entities/platform.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { RatingInfo } from 'src/modules/rating_info/entities/rating_info.entity';
export declare class Provider {
    brand_id: string;
    platformStoreDescription?: string;
    neighbourhood?: string;
    scrape_date: string;
    phoneNumberOne: string;
    phoneNumberTwo?: string;
    type: string;
    cityCode: number;
    imageUrl: string;
    cityName: string;
    platformStoreId: string;
    categoryTags: string[] | null;
    platform: Platform;
    products?: Product[];
    ratingInfo: RatingInfo[];
}
