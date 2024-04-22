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
exports.Provider = void 0;
const graphql_1 = require("@nestjs/graphql");
const platform_entity_1 = require("../../platforms/entities/platform.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const rating_info_entity_1 = require("../../rating_info/entities/rating_info.entity");
const typeorm_1 = require("typeorm");
let Provider = class Provider {
};
exports.Provider = Provider;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Provider.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Provider.prototype, "platformStoreDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Provider.prototype, "neighbourhood", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Provider.prototype, "scrape_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Provider.prototype, "phoneNumberOne", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Provider.prototype, "phoneNumberTwo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Provider.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Provider.prototype, "cityCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Provider.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Provider.prototype, "cityName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Provider.prototype, "platformStoreId", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Provider.prototype, "categoryTags", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => platform_entity_1.Platform, (platform) => platform.providersList),
    (0, typeorm_1.JoinColumn)({ name: 'platformStoreId' }),
    (0, graphql_1.Field)(() => platform_entity_1.Platform),
    __metadata("design:type", platform_entity_1.Platform)
], Provider.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.provider),
    (0, graphql_1.Field)(() => [product_entity_1.Product], { nullable: true }),
    __metadata("design:type", Array)
], Provider.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_info_entity_1.RatingInfo, (ratingInfo) => ratingInfo.providerId),
    (0, graphql_1.Field)(() => [rating_info_entity_1.RatingInfo], { nullable: true }),
    __metadata("design:type", Array)
], Provider.prototype, "ratingInfo", void 0);
exports.Provider = Provider = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Provider);
//# sourceMappingURL=provider.entity.js.map