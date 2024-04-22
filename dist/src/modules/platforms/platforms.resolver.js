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
exports.PlatformsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const platforms_service_1 = require("./platforms.service");
const platform_entity_1 = require("./entities/platform.entity");
const create_platform_input_1 = require("./dto/create-platform.input");
const update_platform_input_1 = require("./dto/update-platform.input");
const provider_entity_1 = require("../providers/entities/provider.entity");
let PlatformsResolver = class PlatformsResolver {
    constructor(platformsService) {
        this.platformsService = platformsService;
    }
    createPlatform(createPlatformInput) {
        return this.platformsService.create(createPlatformInput);
    }
    findAll() {
        return this.platformsService.findAll();
    }
    async platform(platformStoreId) {
        return this.platformsService.findOne(platformStoreId);
    }
    async updatePlatform(platformStoreId, updatePlatformInput) {
        return this.platformsService.findAndUpdate(platformStoreId, updatePlatformInput);
    }
    async providersList(platform) {
        return platform.providersList;
    }
};
exports.PlatformsResolver = PlatformsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => platform_entity_1.Platform),
    __param(0, (0, graphql_1.Args)('createPlatformInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_platform_input_1.CreatePlatformInput]),
    __metadata("design:returntype", void 0)
], PlatformsResolver.prototype, "createPlatform", null);
__decorate([
    (0, graphql_1.Query)(() => [platform_entity_1.Platform], { name: 'platforms' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlatformsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => platform_entity_1.Platform, { nullable: true }),
    __param(0, (0, graphql_1.Args)('platformStoreId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlatformsResolver.prototype, "platform", null);
__decorate([
    (0, graphql_1.Mutation)(() => platform_entity_1.Platform),
    __param(0, (0, graphql_1.Args)('platformStoreId')),
    __param(1, (0, graphql_1.Args)('updatePlatformInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_platform_input_1.UpdatePlatformInput]),
    __metadata("design:returntype", Promise)
], PlatformsResolver.prototype, "updatePlatform", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [provider_entity_1.Provider], { nullable: true }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [platform_entity_1.Platform]),
    __metadata("design:returntype", Promise)
], PlatformsResolver.prototype, "providersList", null);
exports.PlatformsResolver = PlatformsResolver = __decorate([
    (0, graphql_1.Resolver)(() => platform_entity_1.Platform),
    __metadata("design:paramtypes", [platforms_service_1.PlatformsService])
], PlatformsResolver);
//# sourceMappingURL=platforms.resolver.js.map