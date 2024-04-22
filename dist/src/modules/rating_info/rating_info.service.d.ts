import { Repository } from 'typeorm';
import { RatingInfo } from './entities/rating_info.entity';
import { CreateRatingInfoInput } from './dto/create-rating_info.input';
import { UpdateRatingInfoInput } from './dto/update-rating_info.input';
export declare class RatingInfoService {
    private readonly ratingInfoRepository;
    constructor(ratingInfoRepository: Repository<RatingInfo>);
    create(createRatingInfoInput: CreateRatingInfoInput): Promise<RatingInfo>;
    findAll(): Promise<RatingInfo[]>;
    findOne(id: string): Promise<RatingInfo>;
    FindAndUpdate(id: string, updateRatingInfoInput: UpdateRatingInfoInput): Promise<RatingInfo>;
    update(ratingInfo: RatingInfo, updateRatingInfoInput: UpdateRatingInfoInput): Promise<RatingInfo>;
    remove(id: string): Promise<RatingInfo>;
}
