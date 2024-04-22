import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DeliveryInfo } from './entities/delivery_info.entity'; // Import your DeliveryInfo entity
import { CreateDeliveryInfoInput } from './dto/create-delivery_info.input';
import { UpdateDeliveryInfoInput } from './dto/update-delivery_info.input';

@Injectable()
export class DeliveryInfoService {
  constructor(
    @InjectRepository(DeliveryInfo)
    private readonly deliveryRepository: Repository<DeliveryInfo>,
  ) {}

  async create(
    createDeliveryInfoInput: CreateDeliveryInfoInput,
  ): Promise<DeliveryInfo> {
    const deliveryInfo = this.deliveryRepository.create(
      createDeliveryInfoInput,
    );
    return this.deliveryRepository.save(deliveryInfo);
  }

  async findAll() {
    return this.deliveryRepository.find();
  }
  async findOne(deliveryInfoId: string): Promise<DeliveryInfo> {
    return this.deliveryRepository.findOne({ where: { deliveryInfoId } });
  }
  async findAndUpdate(
    deliveryInfoId: string,
    updateDeliveryInfoInput: UpdateDeliveryInfoInput,
  ): Promise<DeliveryInfo> {
    const deliveryInfo = await this.findOne(deliveryInfoId);
    return this.update(deliveryInfo, updateDeliveryInfoInput);
  }

  async update(
    deliveryInfo: DeliveryInfo,
    updateDeliveryInfoInput: UpdateDeliveryInfoInput,
  ): Promise<DeliveryInfo> {
    Object.assign(deliveryInfo, updateDeliveryInfoInput);
    return this.deliveryRepository.save(deliveryInfo);
  }
}
