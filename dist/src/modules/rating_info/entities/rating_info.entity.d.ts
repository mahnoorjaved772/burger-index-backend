import { Provider } from 'src/modules/providers/entities/provider.entity';
export declare class RatingInfo {
    id: string;
    platformStoreRating: number;
    rating: number;
    brand_id?: string;
    totalRating: number;
    detailsLabel?: string;
    totalRatingLabel?: string;
    providerId: Provider;
}
