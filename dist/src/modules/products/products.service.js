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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const search_service_1 = require("../search/search.service");
let ProductsService = class ProductsService {
    constructor(productRepository, searchService) {
        this.productRepository = productRepository;
        this.searchService = searchService;
    }
    async create(createProductInput) {
        const product = this.productRepository.create(createProductInput);
        await this.productRepository.save(product);
        return product;
    }
    async findAll(page, pageSize) {
        const skip = (page - 1) * pageSize;
        const [items, totalCount] = await this.productRepository.findAndCount({
            skip,
            take: pageSize,
        });
        return {
            items,
            totalCount,
            page,
            pageSize,
        };
    }
    async findOne(platformProductId) {
        return this.productRepository.findOne({ where: { platformProductId } });
    }
    async findAndUpdate(platformProductId, updateProductInput) {
        const product = await this.findOne(platformProductId);
        return this.update(product, updateProductInput);
    }
    async update(product, updateProductInput) {
        Object.assign(product, updateProductInput);
        return product;
    }
    async searchProducts(query, page, pageSize) {
        const result = await this.searchService.search(query, page, pageSize);
        return {
            items: result.hits,
            totalCount: result.total,
            page: page,
            pageSize: pageSize,
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        search_service_1.SearchService])
], ProductsService);
//# sourceMappingURL=products.service.js.map