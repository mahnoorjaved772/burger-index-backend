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
exports.RatingInfo = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const provider_entity_1 = require("../../providers/entities/provider.entity");
let RatingInfo = class RatingInfo {
};
exports.RatingInfo = RatingInfo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], RatingInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: false }),
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], RatingInfo.prototype, "platformStoreRating", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], RatingInfo.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RatingInfo.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], RatingInfo.prototype, "totalRating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RatingInfo.prototype, "detailsLabel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RatingInfo.prototype, "totalRatingLabel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provider_entity_1.Provider, (provider) => provider.ratingInfo, {
        nullable: true,
    }),
    (0, graphql_1.Field)(() => provider_entity_1.Provider),
    (0, typeorm_1.JoinColumn)({ name: 'brand_id' }),
    __metadata("design:type", provider_entity_1.Provider)
], RatingInfo.prototype, "providerId", void 0);
exports.RatingInfo = RatingInfo = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], RatingInfo);
//# sourceMappingURL=rating_info.entity.js.map