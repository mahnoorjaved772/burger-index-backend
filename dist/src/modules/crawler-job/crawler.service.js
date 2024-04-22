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
exports.CrawlerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const constants_1 = require("../../common/constants");
const data_extraction_service_1 = require("../data-extraction/data-extraction.service");
let CrawlerService = class CrawlerService {
    constructor(dataExtractionService) {
        this.dataExtractionService = dataExtractionService;
    }
    async handleCron() {
        try {
            console.log('cron job Started');
            console.log('ZIP_FILE_PATH', constants_1.ZIP_FILE_PATH);
            await this.dataExtractionService.readZipFiles(constants_1.ZIP_FILE_PATH, true);
        }
        catch (error) {
            console.error('Error processing ZIP file:', error);
        }
    }
};
exports.CrawlerService = CrawlerService;
__decorate([
    (0, schedule_1.Cron)('30 23 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CrawlerService.prototype, "handleCron", null);
exports.CrawlerService = CrawlerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_extraction_service_1.DataExtractionService])
], CrawlerService);
//# sourceMappingURL=crawler.service.js.map