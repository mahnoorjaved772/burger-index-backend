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
var DataExtractionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataExtractionService = void 0;
const JSZip = require("jszip");
const fs = require("fs/promises");
const path = require("path");
const common_1 = require("@nestjs/common");
const constants_1 = require("../../common/constants");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const platform_entity_1 = require("../platforms/entities/platform.entity");
const data_syncing_service_1 = require("../data-syncing/data-syncing.service");
let DataExtractionService = DataExtractionService_1 = class DataExtractionService {
    constructor(platformRepository, dataSyncingService) {
        this.platformRepository = platformRepository;
        this.dataSyncingService = dataSyncingService;
        this.logger = new common_1.Logger(DataExtractionService_1.name);
    }
    async onModuleInit() {
        this.logger.log('Module initialized, starting ZIP file processing...');
        const count = await this.platformRepository.count();
        if (count === 0) {
            this.logger.log('Seeding initial data...');
            await this.readZipFiles(constants_1.ZIP_FILE_PATH, false);
        }
    }
    async readZipFiles(filePath, todayOnly) {
        this.logger.log(`Reading the main ZIP file from: ${filePath}`);
        try {
            const data = await fs.readFile(filePath);
            const zip = new JSZip();
            await this.processZipContent(zip, data, todayOnly);
        }
        catch (error) {
            this.logger.error('Error loading ZIP file:', error);
        }
    }
    async processZipContent(zip, data, todayOnly) {
        const today = new Date().toISOString().split('T')[0].replace(/-/g, '_');
        try {
            await zip.loadAsync(data);
            await this.extractFiles(zip, today, todayOnly);
        }
        catch (error) {
            this.logger.error('Error processing ZIP content:', error);
        }
    }
    async extractFiles(zip, today, todayOnly) {
        for (const filename of Object.keys(zip.files)) {
            const file = zip.files[filename];
            if (file.dir || filename.includes('__MACOSX'))
                continue;
            const fullPath = path.join(filename);
            if (path.extname(filename) === '.zip') {
                await this.handleNestedZip(file, fullPath, today, todayOnly);
            }
            else if (filename.endsWith('.json')) {
                this.logger.log('Found JSON file:', fullPath);
                const content = await file.async('string');
                const jsonData = JSON.parse(content);
                const uniqueData = this.removeDuplicates(jsonData);
                this.dataSyncingService.processData(uniqueData);
                this.logger.log(`Processed and stored data from ${fullPath}`);
            }
        }
    }
    async handleNestedZip(file, fullPath, today, todayOnly) {
        this.logger.log(`Checking nested ZIP file: ${fullPath} for today's date: ${today}`);
        if (!todayOnly || (todayOnly && file.name.includes(today))) {
            this.logger.log(`Processing nested ZIP file: ${fullPath}`);
            try {
                const innerZipContent = await file.async('nodebuffer');
                const innerZip = new JSZip();
                await this.processZipContent(innerZip, innerZipContent, todayOnly);
            }
            catch (error) {
                this.logger.error(`Error reading nested ZIP file at ${fullPath}:`, error);
            }
        }
        else {
            this.logger.log(`Skipping nested ZIP file without today's date: ${file.name}`);
        }
    }
    removeDuplicates(data) {
        const uniqueRecords = new Map();
        data.forEach((item) => {
            const key = `${item.scrape_date}_${item.platformStoreId}`;
            if (!uniqueRecords.has(key)) {
                uniqueRecords.set(key, item);
            }
        });
        return Array.from(uniqueRecords.values());
    }
};
exports.DataExtractionService = DataExtractionService;
exports.DataExtractionService = DataExtractionService = DataExtractionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(platform_entity_1.Platform)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        data_syncing_service_1.DataSyncingService])
], DataExtractionService);
//# sourceMappingURL=data-extraction.service.js.map