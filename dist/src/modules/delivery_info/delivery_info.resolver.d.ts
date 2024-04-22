import { DeliveryInfoService } from './delivery_info.service';
import { DeliveryInfo } from './entities/delivery_info.entity';
import { CreateDeliveryInfoInput } from './dto/create-delivery_info.input';
export declare class DeliveryInfoResolver {
    private readonly deliveryInfoService;
    constructor(deliveryInfoService: DeliveryInfoService);
    createDeliveryInfo(createDeliveryInfoInput: CreateDeliveryInfoInput): Promise<DeliveryInfo>;
    findAll(): Promise<DeliveryInfo[]>;
    findOne(id: string): Promise<DeliveryInfo>;
    deliveryInfo(id: string): Promise<DeliveryInfo>;
}
