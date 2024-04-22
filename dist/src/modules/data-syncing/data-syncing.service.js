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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSyncingService = void 0;
const common_1 = require("@nestjs/common");
const data_processing_service_1 = require("../data-processing/data-processing.service");
let DataSyncingService = class DataSyncingService {
    constructor(dataProcessService) {
        this.dataProcessService = dataProcessService;
    }
    async processData(uniqueData) {
        for (const data of uniqueData) {
            await this.dataProcessService.processIncomingData(data);
        }
    }
};
exports.DataSyncingService = DataSyncingService;
exports.DataSyncingService = DataSyncingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_processing_service_1.DataProcessService])
], DataSyncingService);
//# sourceMappingURL=data-syncing.service.js.map