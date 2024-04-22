import { PlatformsService } from 'src/modules/platforms/platforms.service';
import { ProductsService } from 'src/modules/products/products.service';
import { ProvidersService } from 'src/modules/providers/providers.service';
import { DeliveryInfoService } from 'src/modules/delivery_info/delivery_info.service';
import { RatingInfoService } from 'src/modules/rating_info/rating_info.service';
import { HistoryService } from '../history/history.service';
import { SearchService } from '../search/search.service';
export declare class DataProcessService {
    private readonly platformsService;
    private readonly productsService;
    private readonly providersService;
    private readonly deliveryInfoService;
    private readonly ratingInfoService;
    private readonly historyService;
    private readonly searchService;
    constructor(platformsService: PlatformsService, productsService: ProductsService, providersService: ProvidersService, deliveryInfoService: DeliveryInfoService, ratingInfoService: RatingInfoService, historyService: HistoryService, searchService: SearchService);
    processIncomingData(data: any): Promise<void>;
    private processPlatform;
    private processProvider;
    private processProducts;
    private processDeliveryInfo;
    private processRatingInfo;
    private platformInput;
    private providerInput;
    private productInput;
    private deliveryInfoInput;
    private ratingInfoInput;
    private historyInput;
}
