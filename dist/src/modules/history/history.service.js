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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const history_entity_1 = require("./entities/history.entity");
let HistoryService = class HistoryService {
    findAndCount(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(historyRepository) {
        this.historyRepository = historyRepository;
    }
    async create(historyInput) {
        const history = this.historyRepository.create(historyInput);
        return this.historyRepository.save(history);
    }
    async findAll(skip = 0, take = 10) {
        return this.historyRepository.find({
            skip,
            take,
        });
    }
    async findByPlatformProductId(platformProductId) {
        return this.historyRepository.findOne({
            where: { platformProductId },
        });
    }
    async findHistoryByPlatformProductId(platformProductId, page, pageSize) {
        const [items, totalCount] = await this.historyRepository.findAndCount({
            where: {
                platformProductId,
            },
            take: pageSize,
            skip: (page - 1) * pageSize,
        });
        return {
            items,
            totalCount,
            page,
            pageSize,
        };
    }
};
exports.HistoryService = HistoryService;
exports.HistoryService = HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.History)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HistoryService);
//# sourceMappingURL=history.service.js.map