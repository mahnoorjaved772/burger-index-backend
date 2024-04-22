"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryInfoModule = void 0;
const common_1 = require("@nestjs/common");
const delivery_info_service_1 = require("./delivery_info.service");
const delivery_info_resolver_1 = require("./delivery_info.resolver");
const delivery_info_entity_1 = require("./entities/delivery_info.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DeliveryInfoModule = class DeliveryInfoModule {
};
exports.DeliveryInfoModule = DeliveryInfoModule;
exports.DeliveryInfoModule = DeliveryInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([delivery_info_entity_1.DeliveryInfo])],
        providers: [delivery_info_resolver_1.DeliveryInfoResolver, delivery_info_service_1.DeliveryInfoService],
        exports: [delivery_info_service_1.DeliveryInfoService],
    })
], DeliveryInfoModule);
//# sourceMappingURL=delivery_info.module.js.map