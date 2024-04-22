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
exports.ProvidersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const provider_entity_1 = require("./entities/provider.entity");
let ProvidersService = class ProvidersService {
    constructor(providerRepository) {
        this.providerRepository = providerRepository;
    }
    async create(createProviderInput) {
        const provider = this.providerRepository.create(createProviderInput);
        return this.providerRepository.save(provider);
    }
    async findAll() {
        return this.providerRepository.find({ relations: ['providersList'] });
    }
    async findOne(brand_id) {
        return this.providerRepository.findOne({ where: { brand_id } });
    }
    async findAndUpdate(brand_id, updateProviderInput) {
        const provider = await this.providerRepository.findOne({
            where: { brand_id },
        });
        return this.update(provider, updateProviderInput);
    }
    async update(provider, updateProviderInput) {
        Object.assign(provider, updateProviderInput);
        return this.providerRepository.save(provider);
    }
    async remove(brand_id) {
        const provider = await this.providerRepository.findOne({
            where: { brand_id },
        });
        return this.providerRepository.remove(provider);
    }
};
exports.ProvidersService = ProvidersService;
exports.ProvidersService = ProvidersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(provider_entity_1.Provider)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProvidersService);
//# sourceMappingURL=providers.service.js.map