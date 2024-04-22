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
exports.ProvidersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const providers_service_1 = require("./providers.service");
const provider_entity_1 = require("./entities/provider.entity");
const create_provider_input_1 = require("./dto/create-provider.input");
const update_provider_input_1 = require("./dto/update-provider.input");
let ProvidersResolver = class ProvidersResolver {
    constructor(providersService) {
        this.providersService = providersService;
    }
    createProvider(createProviderInput) {
        return this.providersService.create(createProviderInput);
    }
    findAll() {
        return this.providersService.findAll();
    }
    async provider(brand_id) {
        return this.providersService.findOne(brand_id);
    }
    updateProvider(updateProviderInput) {
        return this.providersService.findAndUpdate(updateProviderInput.brand_id, updateProviderInput);
    }
};
exports.ProvidersResolver = ProvidersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => provider_entity_1.Provider),
    __param(0, (0, graphql_1.Args)('createProviderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_provider_input_1.CreateProviderInput]),
    __metadata("design:returntype", void 0)
], ProvidersResolver.prototype, "createProvider", null);
__decorate([
    (0, graphql_1.Query)(() => [provider_entity_1.Provider], { name: 'providers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProvidersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => provider_entity_1.Provider),
    __param(0, (0, graphql_1.Args)('brand_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvidersResolver.prototype, "provider", null);
__decorate([
    (0, graphql_1.Mutation)(() => provider_entity_1.Provider),
    __param(0, (0, graphql_1.Args)('updateProviderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_provider_input_1.UpdateProviderInput]),
    __metadata("design:returntype", void 0)
], ProvidersResolver.prototype, "updateProvider", null);
exports.ProvidersResolver = ProvidersResolver = __decorate([
    (0, graphql_1.Resolver)(() => provider_entity_1.Provider),
    __metadata("design:paramtypes", [providers_service_1.ProvidersService])
], ProvidersResolver);
//# sourceMappingURL=providers.resolver.js.map