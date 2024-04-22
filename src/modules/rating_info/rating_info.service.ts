// rating-info.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RatingInfo } from './entities/rating_info.entity';
import { CreateRatingInfoInput } from './dto/create-rating_info.input';
import { UpdateRatingInfoInput } from './dto/update-rating_info.input';

@Injectable()
export class RatingInfoService {
  constructor(
    @InjectRepository(RatingInfo)
    private readonly ratingInfoRepository: Repository<RatingInfo>,
  ) {}

  async create(
    createRatingInfoInput: CreateRatingInfoInput,
  ): Promise<RatingInfo> {
    const newRatingInfo = this.ratingInfoRepository.create(
      createRatingInfoInput,
    );
    return this.ratingInfoRepository.save(newRatingInfo);
  }

  async findAll(): Promise<RatingInfo[]> {
    return this.ratingInfoRepository.find({
      relations: ['provider'], 
    });
  }

  async findOne(id: string): Promise<RatingInfo> {
    return this.ratingInfoRepository.findOne({ where: { id } });
  }

  async FindAndUpdate(
    id: string,
    updateRatingInfoInput: UpdateRatingInfoInput,
  ): Promise<RatingInfo> {
    const ratingInfo = await this.ratingInfoRepository.findOne({
      where: { id },
    });
    return this.update(ratingInfo, updateRatingInfoInput);
  }

  async update(
    ratingInfo: RatingInfo,
    updateRatingInfoInput: UpdateRatingInfoInput,
  ): Promise<RatingInfo> {
    Object.assign(ratingInfo, updateRatingInfoInput);
    return this.ratingInfoRepository.save(ratingInfo);
  }

  async remove(id: string): Promise<RatingInfo> {
    const ratingInfo = await this.ratingInfoRepository.findOne({
      where: { id },
    });
    return this.ratingInfoRepository.remove(ratingInfo);
  }
}
