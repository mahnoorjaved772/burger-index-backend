"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const platforms_module_1 = require("./modules/platforms/platforms.module");
const providers_module_1 = require("./modules/providers/providers.module");
const products_module_1 = require("./modules/products/products.module");
const data_extraction_module_1 = require("./modules/data-extraction/data-extraction.module");
const data_processing_module_1 = require("./modules/data-processing/data-processing.module");
const delivery_info_module_1 = require("./modules/delivery_info/delivery_info.module");
const rating_info_module_1 = require("./modules/rating_info/rating_info.module");
const schedule_1 = require("@nestjs/schedule");
const crawler_module_1 = require("./modules/crawler-job/crawler.module");
const search_module_1 = require("./modules/search/search.module");
const history_module_1 = require("./modules/history/history.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'burger_index9',
                entities: ['dist/**/*.entity.{ts,js}'],
                synchronize: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema/schema.gql'),
            }),
            schedule_1.ScheduleModule.forRoot(),
            platforms_module_1.PlatformModule,
            providers_module_1.ProvidersModule,
            products_module_1.ProductsModule,
            data_extraction_module_1.DataExtractionModule,
            data_processing_module_1.DataProcessingModule,
            delivery_info_module_1.DeliveryInfoModule,
            rating_info_module_1.RatingInfoModule,
            crawler_module_1.CrawlerModule,
            search_module_1.SearchModule,
            history_module_1.HistoryModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map