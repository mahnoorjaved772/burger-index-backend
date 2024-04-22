import { RatingInfoService } from './rating_info.service';
import { RatingInfo } from './entities/rating_info.entity';
import { CreateRatingInfoInput } from './dto/create-rating_info.input';
import { UpdateRatingInfoInput } from './dto/update-rating_info.input';
export declare class RatingInfoResolver {
    private readonly ratingInfoService;
    constructor(ratingInfoService: RatingInfoService);
    createRatingInfo(createRatingInfoInput: CreateRatingInfoInput): Promise<RatingInfo>;
    ratingInfo(): Promise<RatingInfo[]>;
    findOne(id: string): Promise<RatingInfo>;
    updateRatingInfo(updateRatingInfoInput: UpdateRatingInfoInput): Promise<RatingInfo>;
    removeRatingInfo(id: string): Promise<RatingInfo>;
}
