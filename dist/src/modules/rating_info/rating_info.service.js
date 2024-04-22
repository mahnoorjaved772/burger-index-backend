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
exports.RatingInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rating_info_entity_1 = require("./entities/rating_info.entity");
let RatingInfoService = class RatingInfoService {
    constructor(ratingInfoRepository) {
        this.ratingInfoRepository = ratingInfoRepository;
    }
    async create(createRatingInfoInput) {
        const newRatingInfo = this.ratingInfoRepository.create(createRatingInfoInput);
        return this.ratingInfoRepository.save(newRatingInfo);
    }
    async findAll() {
        return this.ratingInfoRepository.find({
            relations: ['provider'],
        });
    }
    async findOne(id) {
        return this.ratingInfoRepository.findOne({ where: { id } });
    }
    async FindAndUpdate(id, updateRatingInfoInput) {
        const ratingInfo = await this.ratingInfoRepository.findOne({
            where: { id },
        });
        return this.update(ratingInfo, updateRatingInfoInput);
    }
    async update(ratingInfo, updateRatingInfoInput) {
        Object.assign(ratingInfo, updateRatingInfoInput);
        return this.ratingInfoRepository.save(ratingInfo);
    }
    async remove(id) {
        const ratingInfo = await this.ratingInfoRepository.findOne({
            where: { id },
        });
        return this.ratingInfoRepository.remove(ratingInfo);
    }
};
exports.RatingInfoService = RatingInfoService;
exports.RatingInfoService = RatingInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_info_entity_1.RatingInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RatingInfoService);
//# sourceMappingURL=rating_info.service.js.map