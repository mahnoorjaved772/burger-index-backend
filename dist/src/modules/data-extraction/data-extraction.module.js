"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataExtractionModule = void 0;
const common_1 = require("@nestjs/common");
const data_extraction_service_1 = require("./data-extraction.service");
const data_processing_module_1 = require("../data-processing/data-processing.module");
const data_syncing_module_1 = require("../data-syncing/data-syncing.module");
const platforms_module_1 = require("../platforms/platforms.module");
const typeorm_1 = require("@nestjs/typeorm");
const platform_entity_1 = require("../platforms/entities/platform.entity");
let DataExtractionModule = class DataExtractionModule {
};
exports.DataExtractionModule = DataExtractionModule;
exports.DataExtractionModule = DataExtractionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            data_processing_module_1.DataProcessingModule,
            data_syncing_module_1.DataSyncingModule,
            platforms_module_1.PlatformModule,
            typeorm_1.TypeOrmModule.forFeature([platform_entity_1.Platform]),
        ],
        providers: [data_extraction_service_1.DataExtractionService],
        exports: [data_extraction_service_1.DataExtractionService],
    })
], DataExtractionModule);
//# sourceMappingURL=data-extraction.module.js.map