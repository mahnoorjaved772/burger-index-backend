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
exports.DeliveryInfoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const delivery_info_service_1 = require("./delivery_info.service");
const delivery_info_entity_1 = require("./entities/delivery_info.entity");
const create_delivery_info_input_1 = require("./dto/create-delivery_info.input");
let DeliveryInfoResolver = class DeliveryInfoResolver {
    constructor(deliveryInfoService) {
        this.deliveryInfoService = deliveryInfoService;
    }
    createDeliveryInfo(createDeliveryInfoInput) {
        return this.deliveryInfoService.create(createDeliveryInfoInput);
    }
    findAll() {
        return this.deliveryInfoService.findAll();
    }
    findOne(id) {
        return this.deliveryInfoService.findOne(id);
    }
    async deliveryInfo(id) {
        return this.deliveryInfoService.findOne(id);
    }
};
exports.DeliveryInfoResolver = DeliveryInfoResolver;
__decorate([
    (0, graphql_1.Mutation)(() => delivery_info_entity_1.DeliveryInfo),
    __param(0, (0, graphql_1.Args)('createDeliveryInfoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delivery_info_input_1.CreateDeliveryInfoInput]),
    __metadata("design:returntype", void 0)
], DeliveryInfoResolver.prototype, "createDeliveryInfo", null);
__decorate([
    (0, graphql_1.Query)(() => [delivery_info_entity_1.DeliveryInfo], { name: 'deliveryInfo' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliveryInfoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => delivery_info_entity_1.DeliveryInfo, { name: 'deliveryInfo' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryInfoResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => delivery_info_entity_1.DeliveryInfo, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryInfoResolver.prototype, "deliveryInfo", null);
exports.DeliveryInfoResolver = DeliveryInfoResolver = __decorate([
    (0, graphql_1.Resolver)(() => delivery_info_entity_1.DeliveryInfo),
    __metadata("design:paramtypes", [delivery_info_service_1.DeliveryInfoService])
], DeliveryInfoResolver);
//# sourceMappingURL=delivery_info.resolver.js.map