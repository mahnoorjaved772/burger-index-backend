"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSyncingModule = void 0;
const common_1 = require("@nestjs/common");
const data_syncing_service_1 = require("./data-syncing.service");
const data_processing_module_1 = require("../data-processing/data-processing.module");
let DataSyncingModule = class DataSyncingModule {
};
exports.DataSyncingModule = DataSyncingModule;
exports.DataSyncingModule = DataSyncingModule = __decorate([
    (0, common_1.Module)({
        imports: [data_processing_module_1.DataProcessingModule],
        providers: [data_syncing_service_1.DataSyncingService],
        exports: [data_syncing_service_1.DataSyncingService],
    })
], DataSyncingModule);
//# sourceMappingURL=data-syncing.module.js.map