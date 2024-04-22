"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProcessingModule = void 0;
const common_1 = require("@nestjs/common");
const data_processing_service_1 = require("./data-processing.service");
const products_module_1 = require("../products/products.module");
const providers_module_1 = require("../providers/providers.module");
const platforms_module_1 = require("../platforms/platforms.module");
const delivery_info_module_1 = require("../delivery_info/delivery_info.module");
const rating_info_module_1 = require("../rating_info/rating_info.module");
const history_module_1 = require("../history/history.module");
const search_module_1 = require("../search/search.module");
let DataProcessingModule = class DataProcessingModule {
};
exports.DataProcessingModule = DataProcessingModule;
exports.DataProcessingModule = DataProcessingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platforms_module_1.PlatformModule,
            products_module_1.ProductsModule,
            providers_module_1.ProvidersModule,
            delivery_info_module_1.DeliveryInfoModule,
            rating_info_module_1.RatingInfoModule,
            history_module_1.HistoryModule,
            search_module_1.SearchModule,
        ],
        providers: [data_processing_service_1.DataProcessService],
        exports: [data_processing_service_1.DataProcessService],
    })
], DataProcessingModule);
//# sourceMappingURL=data-processing.module.js.map