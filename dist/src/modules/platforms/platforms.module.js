"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformModule = void 0;
const common_1 = require("@nestjs/common");
const platforms_service_1 = require("./platforms.service");
const platforms_resolver_1 = require("./platforms.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const platform_entity_1 = require("./entities/platform.entity");
const providers_module_1 = require("../providers/providers.module");
let PlatformModule = class PlatformModule {
};
exports.PlatformModule = PlatformModule;
exports.PlatformModule = PlatformModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([platform_entity_1.Platform]),
            (0, common_1.forwardRef)(() => providers_module_1.ProvidersModule),
        ],
        providers: [platforms_resolver_1.PlatformsResolver, platforms_service_1.PlatformsService],
        exports: [platforms_service_1.PlatformsService],
    })
], PlatformModule);
//# sourceMappingURL=platforms.module.js.map