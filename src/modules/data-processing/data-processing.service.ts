import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PlatformsService } from 'src/modules/platforms/platforms.service';
import { ProductsService } from 'src/modules/products/products.service';
import { ProvidersService } from 'src/modules/providers/providers.service';
import { DeliveryInfoService } from 'src/modules/delivery_info/delivery_info.service';
import { RatingInfoService } from 'src/modules/rating_info/rating_info.service';
import { CreatePlatformInput } from 'src/modules/platforms/dto/create-platform.input';
import { CreateProductInput } from 'src/modules/products/dto/create-product.input';
import { CreateProviderInput } from 'src/modules/providers/dto/create-provider.input';
import { CreateDeliveryInfoInput } from 'src/modules/delivery_info/dto/create-delivery_info.input';
import { CreateRatingInfoInput } from 'src/modules/rating_info/dto/create-rating_info.input';
import { HistoryInput } from '../history/dto/history.input';
import { HistoryService } from '../history/history.service';
import { SearchService } from '../search/search.service';

@Injectable()
export class DataProcessService {
  constructor(
    private readonly platformsService: PlatformsService,
    private readonly productsService: ProductsService,
    private readonly providersService: ProvidersService,
    private readonly deliveryInfoService: DeliveryInfoService,
    private readonly ratingInfoService: RatingInfoService,
    private readonly historyService: HistoryService,
    private readonly searchService: SearchService,
  ) {}

  async processIncomingData(data: any): Promise<void> {
    console.log('Processing incoming data');
    const brand_id = data.brand_id || uuidv4();

    await this.processPlatform(data);
    await this.processProvider(data, brand_id);
    await this.processProducts(data, brand_id);
    await this.processDeliveryInfo(data, brand_id);
    await this.processRatingInfo(data, brand_id);
  }

  private async processPlatform(data: any): Promise<void> {
    const platformInput = this.platformInput(data);
    try {
      // Try to find the platform by some identifiable attribute, e.g., platformStoreId
      const existingPlatform = await this.platformsService.findOne(
        platformInput.platformStoreId,
      );

      // console.log('existingPlatform', existingPlatform);
      if (existingPlatform) {
        // If platform exists, update it
        const updatedPlatform = await this.platformsService.update(
          existingPlatform,
          platformInput,
        );
        console.log('Platform updated:', updatedPlatform);
      } else {
        // If platform does not exist, create it
        const newPlatform = await this.platformsService.create(platformInput);
        console.log('Platform created:', newPlatform);
      }
    } catch (error) {
      console.error('Error processing platform:', error);
    }
  }

  private async processProvider(data: any, brand_id: string): Promise<void> {
    const providerInput = this.providerInput(data, brand_id);
    try {
      // Attempt to find the provider by an identifier, e.g., platformStoreId
      const existingProvider = await this.providersService.findOne(
        providerInput.brand_id,
      );
      console.log('existingProvider', existingProvider);

      if (existingProvider) {
        // If provider exists, update it
        const updatedProvider = await this.providersService.update(
          existingProvider,
          providerInput,
        );
        console.log('Provider updated:', updatedProvider);
      } else {
        // If provider does not exist, create it
        const newProvider = await this.providersService.create(providerInput);
        console.log('Provider created:', newProvider);
      }
    } catch (error) {
      console.error('Error processing provider:', error);
    }
  }

  private async processProducts(data: any, brand_id: string): Promise<void> {
    if (data.products && Array.isArray(data.products)) {
      for (const productData of data.products) {
        const productInput = this.productInput(productData, brand_id);
        try {
          // Attempt to find the product by an identifier, e.g., platformProductId
          const existingProduct = await this.productsService.findOne(
            productInput.platformProductId,
          );
          console.log('existingProduct', existingProduct);
          const historyInput = this.historyInput(existingProduct, brand_id);

          if (existingProduct) {
            // If product exists, update it
            const updatedProduct = await this.productsService.update(
              existingProduct,
              productInput,
            );
            console.log('historyInput', historyInput);
            const newProduct = await this.historyService.create(historyInput);
            console.log('history created', newProduct);
            this.searchService.addIndex(existingProduct);
            console.log('Product updated:', updatedProduct);
          } else {
            // If product does not exist, create it
            const newProduct = await this.productsService.create(productInput);
            console.log('Product created:', newProduct);
            this.searchService.addIndex(newProduct);
            this.searchService.addIndex(newProduct);
          }
        } catch (error) {
          console.error(`Error processing product: ${productData.name}`, error);
        }
      }
    }
  }

  private async processDeliveryInfo(
    data: any,
    brand_id: string,
  ): Promise<void> {
    if (!data.deliveryInfo || !Array.isArray(data.deliveryInfo)) {
      console.log('No delivery info provided to process.');
      return;
    }

    for (const delivery of data.deliveryInfo) {
      try {
        const deliveryInfoId = delivery.deliveryInfoId;
        const existingDeliveryInfo =
          await this.deliveryInfoService.findOne(deliveryInfoId);

        if (existingDeliveryInfo) {
          // If delivery info exists, update it
          const updatedDeliveryInfo =
            await this.deliveryInfoService.findAndUpdate(deliveryInfoId, {
              ...delivery,
              brand_id, // Assuming additional properties need to be spread from delivery
            });
          console.log('Delivery Info updated:', updatedDeliveryInfo);
        } else {
          // If delivery info does not exist, create it
          const newDeliveryInfo = await this.deliveryInfoService.create({
            ...delivery,
            brand_id,
          });
          console.log('Delivery Info created:', newDeliveryInfo);
        }
      } catch (error) {
        console.error('Failed to process delivery info', error);
      }
    }
  }

  private async processRatingInfo(data: any, brand_id: string): Promise<void> {
    if (data.ratingsInfo && Array.isArray(data.ratingsInfo)) {
      for (const rating of data.ratingsInfo) {
        const ratingInput = this.ratingInfoInput(rating, brand_id);
        try {
          const existingRatingInfo = await this.ratingInfoService.findOne(
            rating.brand_id,
          );
          console.log('existingRatingInfo, ', existingRatingInfo);
          if (existingRatingInfo) {
            // If rating info exists, update it
            const updatedRatingInfo = await this.ratingInfoService.update(
              existingRatingInfo,
              ratingInput,
            );
            console.log('Rating Info updated:', updatedRatingInfo);
          } else {
            // If rating info does not exist, create it
            const newRatingInfo =
              await this.ratingInfoService.create(ratingInput);
            console.log('Rating Info created:', newRatingInfo);
          }
        } catch (error) {
          console.error('Failed to process rating info', error);
        }
      }
    }
  }

  private platformInput(data: any): CreatePlatformInput {
    return {
      platform: data.platform,
      platformStoreId: data.platformStoreId,
      platformStoreName: data.platformStoreName,
      platformStoreDescription: data.platformStoreDescription ?? '',
      platformStoreAddress: data.platformStoreAddress ?? '',
      platformStoreUrl: data.platformStoreUrl ?? '',
    };
  }

  private providerInput(data: any, brand_id: string): CreateProviderInput {
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

  private productInput(productData: any, brand_id: string): CreateProductInput {
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

  private deliveryInfoInput(
    delivery: any,
    platform: string,
    brand_id: string,
  ): CreateDeliveryInfoInput {
    return {
      platform,
      serviceFee: delivery.serviceFee,
      highestMinBasketSurcharge: delivery.highestMinBasketSurcharge ?? 0,
      reference: delivery.reference ?? '',
      brand_id: brand_id,
    };
  }

  private ratingInfoInput(
    rating: any,
    brand_id: string,
  ): CreateRatingInfoInput {
    return {
      platformStoreRating: parseFloat(rating.platformStoreRating),
      rating: parseInt(rating.rating, 10) ?? 0,
      totalRating: parseInt(rating.totalRating, 10) ?? 0,
      detailsLabel: rating.detailsLabel ?? '',
      totalRatingLabel: rating.totalRatingLabel ?? '',
      brand_id: brand_id,
    };
  }

  private historyInput(data: any, brand_id): HistoryInput {
    // Check if data is null and handle it appropriately
    if (!data) {
      console.error('Invalid data provided:', data);
      return null; // or however you want to handle this case
    }

    return {
      id: uuidv4(), // Ensure that uuidv4 is being called to generate the ID
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
}
