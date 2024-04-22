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
exports.PlatformsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const platform_entity_1 = require("./entities/platform.entity");
let PlatformsService = class PlatformsService {
    constructor(platformRepository) {
        this.platformRepository = platformRepository;
    }
    async create(createPlatformInput) {
        const platform = this.platformRepository.create(createPlatformInput);
        console.log('save');
        return this.platformRepository.save(platform);
    }
    async findAll() {
        return this.platformRepository.find();
    }
    async findOne(platformStoreId) {
        return this.platformRepository.findOne({ where: { platformStoreId } });
    }
    async findAndUpdate(platformStoreId, updatePlatformInput) {
        const platform = await this.platformRepository.findOne({
            where: { platformStoreId },
        });
        return this.update(platform, updatePlatformInput);
    }
    async update(platform, updatePlatformInput) {
        Object.assign(platform, updatePlatformInput);
        return this.platformRepository.save(platform);
    }
};
exports.PlatformsService = PlatformsService;
exports.PlatformsService = PlatformsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(platform_entity_1.Platform)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlatformsService);
//# sourceMappingURL=platforms.service.js.map