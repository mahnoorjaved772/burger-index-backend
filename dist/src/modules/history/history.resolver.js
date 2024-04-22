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
exports.HistoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const history_service_1 = require("./history.service");
const history_entity_1 = require("./entities/history.entity");
const history_input_1 = require("./dto/history.input");
const history_pagination_output_1 = require("./dto/history-pagination.output");
let HistoryResolver = class HistoryResolver {
    constructor(historyService) {
        this.historyService = historyService;
    }
    async createHistory(historyInput) {
        return this.historyService.create(historyInput);
    }
    findAll(skip, take) {
        return this.historyService.findAll(skip, take);
    }
    findByPlatformProductId(platformProductId) {
        return this.historyService.findByPlatformProductId(platformProductId);
    }
    findByPlatformProductIdAndPlatformStoreId(platformProductId, page, pageSize) {
        return this.historyService.findHistoryByPlatformProductId(platformProductId, page, pageSize);
    }
};
exports.HistoryResolver = HistoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => history_entity_1.History),
    __param(0, (0, graphql_1.Args)('historyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [history_input_1.HistoryInput]),
    __metadata("design:returntype", Promise)
], HistoryResolver.prototype, "createHistory", null);
__decorate([
    (0, graphql_1.Query)(() => [history_entity_1.History], { name: 'findAllHistory' }),
    __param(0, (0, graphql_1.Args)('skip', { type: () => graphql_1.Int, nullable: true })),
    __param(1, (0, graphql_1.Args)('take', { type: () => graphql_1.Int, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HistoryResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => history_entity_1.History, { name: 'findByPlatformProductId' }),
    __param(0, (0, graphql_1.Args)('platformProductId', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistoryResolver.prototype, "findByPlatformProductId", null);
__decorate([
    (0, graphql_1.Query)(() => history_pagination_output_1.HistoryPagination, { name: 'findByPlatformProductId' }),
    __param(0, (0, graphql_1.Args)('platformProductId', { type: () => String })),
    __param(1, (0, graphql_1.Args)('page', { type: () => graphql_1.Int, defaultValue: 1 })),
    __param(2, (0, graphql_1.Args)('pageSize', { type: () => graphql_1.Int, defaultValue: 10 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], HistoryResolver.prototype, "findByPlatformProductIdAndPlatformStoreId", null);
exports.HistoryResolver = HistoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => history_entity_1.History),
    __metadata("design:paramtypes", [history_service_1.HistoryService])
], HistoryResolver);
//# sourceMappingURL=history.resolver.js.map