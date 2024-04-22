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
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const products_service_1 = require("./products.service");
const product_entity_1 = require("./entities/product.entity");
const create_product_input_1 = require("./dto/create-product.input");
const update_product_input_1 = require("./dto/update-product.input");
const search_product_input_1 = require("./dto/search-product.input");
const search_service_1 = require("../search/search.service");
const product_pagination_output_1 = require("./dto/product.pagination.output");
let ProductsResolver = class ProductsResolver {
    constructor(productsService, searchService) {
        this.productsService = productsService;
        this.searchService = searchService;
    }
    createProduct(createProductInput) {
        return this.productsService.create(createProductInput);
    }
    async findAllProducts(page, pageSize) {
        return this.productsService.findAll(page, pageSize);
    }
    async product(platformProductId) {
        return this.productsService.findOne(platformProductId);
    }
    updateProduct(platformProductId, updateProductInput) {
        return this.productsService.findAndUpdate(platformProductId, updateProductInput);
    }
    async searchProducts(query, page, pageSize) {
        return this.productsService.searchProducts(query, page, pageSize);
    }
};
exports.ProductsResolver = ProductsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('createProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_input_1.CreateProductInput]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Query)(() => product_pagination_output_1.ProductPagination, { name: 'allProducts' }),
    __param(0, (0, graphql_1.Args)('page', { type: () => graphql_1.Int, defaultValue: 1 })),
    __param(1, (0, graphql_1.Args)('pageSize', { type: () => graphql_1.Int, defaultValue: 10 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "findAllProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { nullable: true }),
    __param(0, (0, graphql_1.Args)('platformProductId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('platformProductId')),
    __param(1, (0, graphql_1.Args)('updateProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_input_1.UpdateProductInput]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Query)(() => search_product_input_1.ProductSearchResults, { name: 'searchProducts' }),
    __param(0, (0, graphql_1.Args)('query', { type: () => String })),
    __param(1, (0, graphql_1.Args)('page', { type: () => graphql_1.Int, defaultValue: 1 })),
    __param(2, (0, graphql_1.Args)('pageSize', { type: () => graphql_1.Int, defaultValue: 10 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "searchProducts", null);
exports.ProductsResolver = ProductsResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        search_service_1.SearchService])
], ProductsResolver);
//# sourceMappingURL=products.resolver.js.map