"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingInfoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rating_info_service_1 = require("./rating_info.service");
const rating_info_resolver_1 = require("./rating_info.resolver");
const providers_module_1 = require("../providers/providers.module");
const rating_info_entity_1 = require("./entities/rating_info.entity");
let RatingInfoModule = class RatingInfoModule {
};
exports.RatingInfoModule = RatingInfoModule;
exports.RatingInfoModule = RatingInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            providers_module_1.ProvidersModule,
            typeorm_1.TypeOrmModule.forFeature([rating_info_entity_1.RatingInfo]),
        ],
        providers: [rating_info_resolver_1.RatingInfoResolver, rating_info_service_1.RatingInfoService],
        exports: [rating_info_service_1.RatingInfoService],
    })
], RatingInfoModule);
//# sourceMappingURL=rating_info.module.js.map