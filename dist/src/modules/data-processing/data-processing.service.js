"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProcessService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const platforms_service_1 = require("../platforms/platforms.service");
const products_service_1 = require("../products/products.service");
const providers_service_1 = require("../providers/providers.service");
const delivery_info_service_1 = require("../delivery_info/delivery_info.service");
const rating_info_service_1 = require("../rating_info/rating_info.service");
const history_service_1 = require("../history/history.service");
const search_service_1 = require("../search/search.service");
let DataProcessService = class DataProcessService {
    constructor(platformsService, productsService, providersService, deliveryInfoService, ratingInfoService, historyService, searchService) {
        this.platformsService = platformsService;
        this.productsService = productsService;
        this.providersService = providersService;
        this.deliveryInfoService = deliveryInfoService;
        this.ratingInfoService = ratingInfoService;
        this.historyService = historyService;
        this.searchService = searchService;
    }
    async processIncomingData(data) {
        console.log('Processing incoming data');
        const brand_id = data.brand_id || (0, uuid_1.v4)();
        await this.processPlatform(data);
        await this.processProvider(data, brand_id);
        await this.processProducts(data, brand_id);
        await this.processDeliveryInfo(data, brand_id);
        await this.processRatingInfo(data, brand_id);
    }
    async processPlatform(data) {
        const platformInput = this.platformInput(data);
        try {
            const existingPlatform = await this.platformsService.findOne(platformInput.platformStoreId);
            if (existingPlatform) {
                const updatedPlatform = await this.platformsService.update(existingPlatform, platformInput);
                console.log('Platform updated:', updatedPlatform);
            }
            else {
                const newPlatform = await this.platformsService.create(platformInput);
                console.log('Platform created:', newPlatform);
            }
        }
        catch (error) {
            console.error('Error processing platform:', error);
        }
    }
    async processProvider(data, brand_id) {
        const providerInput = this.providerInput(data, brand_id);
        try {
            const existingProvider = await this.providersService.findOne(providerInput.brand_id);
            console.log('existingProvider', existingProvider);
            if (existingProvider) {
                const updatedProvider = await this.providersService.update(existingProvider, providerInput);
                console.log('Provider updated:', updatedProvider);
            }
            else {
                const newProvider = await this.providersService.create(providerInput);
                console.log('Provider created:', newProvider);
            }
        }
        catch (error) {
            console.error('Error processing provider:', error);
        }
    }
    async processProducts(data, brand_id) {
        if (data.products && Array.isArray(data.products)) {
            for (const productData of data.products) {
                const productInput = this.productInput(productData, brand_id);
                try {
                    const existingProduct = await this.productsService.findOne(productInput.platformProductId);
                    console.log('existingProduct', existingProduct);
                    const historyInput = this.historyInput(existingProduct, brand_id);
                    if (existingProduct) {
                        const updatedProduct = await this.productsService.update(existingProduct, productInput);
                        console.log('historyInput', historyInput);
                        const newProduct = await this.historyService.create(historyInput);
                        console.log('history created', newProduct);
                        this.searchService.addIndex(existingProduct);
                        console.log('Product updated:', updatedProduct);
                    }
                    else {
                        const newProduct = await this.productsService.create(productInput);
                        console.log('Product created:', newProduct);
                        this.searchService.addIndex(newProduct);
                        this.searchService.addIndex(newProduct);
                    }
                }
                catch (error) {
                    console.error(`Error processing product: ${productData.name}`, error);
                }
            }
        }
    }
    async processDeliveryInfo(data, brand_id) {
        if (!data.deliveryInfo || !Array.isArray(data.deliveryInfo)) {
            console.log('No delivery info provided to process.');
            return;
        }
        for (const delivery of data.deliveryInfo) {
            try {
                const deliveryInfoId = delivery.deliveryInfoId;
                const existingDeliveryInfo = await this.deliveryInfoService.findOne(deliveryInfoId);
                if (existingDeliveryInfo) {
                    const updatedDeliveryInfo = await this.deliveryInfoService.findAndUpdate(deliveryInfoId, {
                        ...delivery,
                        brand_id,
                    });
                    console.log('Delivery Info updated:', updatedDeliveryInfo);
                }
                else {
                    const newDeliveryInfo = await this.deliveryInfoService.create({
                        ...delivery,
                        brand_id,
                    });
                    console.log('Delivery Info created:', newDeliveryInfo);
                }
            }
            catch (error) {
                console.error('Failed to process delivery info', error);
            }
        }
    }
    async processRatingInfo(data, brand_id) {
        if (data.ratingsInfo && Array.isArray(data.ratingsInfo)) {
            for (const rating of data.ratingsInfo) {
                const ratingInput = this.ratingInfoInput(rating, brand_id);
                try {
                    const existingRatingInfo = await this.ratingInfoService.findOne(rating.brand_id);
                    console.log('existingRatingInfo, ', existingRatingInfo);
                    if (existingRatingInfo) {
                        const updatedRatingInfo = await this.ratingInfoService.update(existingRatingInfo, ratingInput);
                        console.log('Rating Info updated:', updatedRatingInfo);
                    }
                    else {
                        const newRatingInfo = await this.ratingInfoService.create(ratingInput);
                        console.log('Rating Info created:', newRatingInfo);
                    }
                }
                catch (error) {
                    console.error('Failed to process rating info', error);
                }
            }
        }
    }
    platformInput(data) {
        return {
            platform: data.platform,
            platformStoreId: data.platformStoreId,
            platformStoreName: data.platformStoreName,
            platformStoreDescription: data.platformStoreDescription ?? '',
            platformStoreAddress: data.platformStoreAddress ?? '',
            platformStoreUrl: data.platformStoreUrl ?? '',
        };
    }
    providerInput(data, brand_id) {
        return {
            platformStoreDescription: data.platformStoreDescription ?? '',
            neighbourhood: data.neighbourhood ?? '',
            phoneNumberOne: data.phoneNumberOne ?? '',
            phoneNumberTwo: data.phoneNumberTwo ?? '',
            type: data.type,
            cityCode: data.cityCode ?? 0,
            imageUrl: data.imageUrl ?? '',
            cityName: data.cityName ?? '',
            scrape_date: data.scrape_date,
            brand_id: brand_id,
            platformStoreId: data.platformStoreId,
        };
    }
    productInput(productData, brand_id) {
        return {
            platformProductId: productData.platformProductId,
            name: productData.name,
            description: productData.description ?? '',
            imageUrl: productData.imageUrl ?? '',
            isAvailable: productData.isAvailable ?? false,
            isPopular: productData.isPopular ?? false,
            isSoldOut: productData.isSoldOut ?? false,
            currency: productData.currency ?? 'SAR',
            price: productData.price,
            discountedPrice: productData.discountedPrice ?? 0,
            discountAmount: productData.discountAmount ?? 0,
            priceDiscountPercent: productData.priceDiscountPercent ?? 0,
            providerId: brand_id,
            platform: productData.platform,
        };
    }
    deliveryInfoInput(delivery, platform, brand_id) {
        return {
            platform,
            serviceFee: delivery.serviceFee,
            highestMinBasketSurcharge: delivery.highestMinBasketSurcharge ?? 0,
            reference: delivery.reference ?? '',
            brand_id: brand_id,
        };
    }
    ratingInfoInput(rating, brand_id) {
        return {
            platformStoreRating: parseFloat(rating.platformStoreRating),
            rating: parseInt(rating.rating, 10) ?? 0,
            totalRating: parseInt(rating.totalRating, 10) ?? 0,
            detailsLabel: rating.detailsLabel ?? '',
            totalRatingLabel: rating.totalRatingLabel ?? '',
            brand_id: brand_id,
        };
    }
    historyInput(data, brand_id) {
        if (!data) {
            console.error('Invalid data provided:', data);
            return null;
        }
        return {
            id: (0, uuid_1.v4)(),
            neighbourhood: data.neighbourhood ?? '',
            phoneNumberOne: data.phoneNumberOne ?? '',
            phoneNumberTwo: data.phoneNumberTwo ?? '',
            cityCode: data.cityCode ?? '',
            imageUrl: data.imageUrl ?? '',
            cityName: data.cityName ?? '',
            rating: data.rating ?? 0,
            platformStoreRating: data.platformStoreRating ?? '',
            totalRating: data.totalRating ?? '',
            platform: data.platform ?? '',
            platformStoreId: data.platformStoreId ?? '',
            brand_id: brand_id ?? '',
            platformStoreName: data.platformStoreName ?? '',
            platformStoreDescription: data.platformStoreDescription ?? '',
            platformStoreAddress: data.platformStoreAddress ?? '',
            platformStoreUrl: data.platformStoreUrl ?? '',
            platformProductId: data.platformProductId ?? '',
            name: data.name ?? '',
            description: data.description ?? '',
            isAvailable: data.isAvailable ?? false,
            isPopular: data.isPopular ?? false,
            isSoldOut: data.isSoldOut ?? false,
            currency: data.currency ?? 'SAR',
            price: data.price ?? 0,
            discountedPrice: data.discountedPrice ?? 0,
            discountAmount: data.discountAmount ?? 0,
            priceDiscountPercent: data.priceDiscountPercent ?? 0,
            scrapeDate: data.scrapeDate ?? '',
        };
    }
};
exports.DataProcessService = DataProcessService;
exports.DataProcessService = DataProcessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [platforms_service_1.PlatformsService,
        products_service_1.ProductsService,
        providers_service_1.ProvidersService,
        delivery_info_service_1.DeliveryInfoService,
        rating_info_service_1.RatingInfoService,
        history_service_1.HistoryService,
        search_service_1.SearchService])
], DataProcessService);
//# sourceMappingURL=data-processing.service.js.map