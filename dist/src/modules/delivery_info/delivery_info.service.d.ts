import { Repository } from 'typeorm';
import { DeliveryInfo } from './entities/delivery_info.entity';
import { CreateDeliveryInfoInput } from './dto/create-delivery_info.input';
import { UpdateDeliveryInfoInput } from './dto/update-delivery_info.input';
export declare class DeliveryInfoService {
    private readonly deliveryRepository;
    constructor(deliveryRepository: Repository<DeliveryInfo>);
    create(createDeliveryInfoInput: CreateDeliveryInfoInput): Promise<DeliveryInfo>;
    findAll(): Promise<DeliveryInfo[]>;
    findOne(deliveryInfoId: string): Promise<DeliveryInfo>;
    findAndUpdate(deliveryInfoId: string, updateDeliveryInfoInput: UpdateDeliveryInfoInput): Promise<DeliveryInfo>;
    update(deliveryInfo: DeliveryInfo, updateDeliveryInfoInput: UpdateDeliveryInfoInput): Promise<DeliveryInfo>;
}
