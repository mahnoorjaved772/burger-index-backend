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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingInfoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rating_info_service_1 = require("./rating_info.service");
const rating_info_entity_1 = require("./entities/rating_info.entity");
const create_rating_info_input_1 = require("./dto/create-rating_info.input");
const update_rating_info_input_1 = require("./dto/update-rating_info.input");
let RatingInfoResolver = class RatingInfoResolver {
    constructor(ratingInfoService) {
        this.ratingInfoService = ratingInfoService;
    }
    createRatingInfo(createRatingInfoInput) {
        return this.ratingInfoService.create(createRatingInfoInput);
    }
    ratingInfo() {
        return this.ratingInfoService.findAll();
    }
    findOne(id) {
        return this.ratingInfoService.findOne(id);
    }
    updateRatingInfo(updateRatingInfoInput) {
        return this.ratingInfoService.FindAndUpdate(updateRatingInfoInput.id, updateRatingInfoInput);
    }
    removeRatingInfo(id) {
        return this.ratingInfoService.remove(id);
    }
};
exports.RatingInfoResolver = RatingInfoResolver;
__decorate([
    (0, graphql_1.Mutation)(() => rating_info_entity_1.RatingInfo),
    __param(0, (0, graphql_1.Args)('createRatingInfoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rating_info_input_1.CreateRatingInfoInput]),
    __metadata("design:returntype", void 0)
], RatingInfoResolver.prototype, "createRatingInfo", null);
__decorate([
    (0, graphql_1.Query)(() => [rating_info_entity_1.RatingInfo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RatingInfoResolver.prototype, "ratingInfo", null);
__decorate([
    (0, graphql_1.Query)(() => rating_info_entity_1.RatingInfo, { name: 'ratingInfo' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingInfoResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => rating_info_entity_1.RatingInfo),
    __param(0, (0, graphql_1.Args)('updateRatingInfoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_rating_info_input_1.UpdateRatingInfoInput]),
    __metadata("design:returntype", void 0)
], RatingInfoResolver.prototype, "updateRatingInfo", null);
__decorate([
    (0, graphql_1.Mutation)(() => rating_info_entity_1.RatingInfo),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RatingInfoResolver.prototype, "removeRatingInfo", null);
exports.RatingInfoResolver = RatingInfoResolver = __decorate([
    (0, graphql_1.Resolver)(() => rating_info_entity_1.RatingInfo),
    __metadata("design:paramtypes", [rating_info_service_1.RatingInfoService])
], RatingInfoResolver);
//# sourceMappingURL=rating_info.resolver.js.map