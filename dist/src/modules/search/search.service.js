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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const elasticsearch_2 = require("@elastic/elasticsearch");
let SearchService = class SearchService {
    constructor(esService) {
        this.esService = esService;
        this.eSclient = new elasticsearch_2.Client({
            node: 'https://dd99d274256a492fa7976fe0ddd3fe5e.us-central1.gcp.cloud.es.io:443',
            auth: {
                apiKey: 'QlpNR0FZOEJMRDhBQlpVSTliS2I6SWg0Z2FlVzlRZEdaVEJVcWRmTG1kdw==',
            },
        });
    }
    async checkElasticConnection() {
        const resp = await this.eSclient.info();
        console.log(resp);
    }
    async addIndex(product) {
        const result = await this.eSclient.helpers.bulk({
            datasource: [product],
            onDocument: (doc) => ({
                index: { _index: 'platform_pname_index' },
                data: {
                    platformProductId: doc.platformProductId,
                    name: doc.name,
                    description: doc.description,
                    price: doc.price,
                },
            }),
        });
        console.log('result ====>', result);
    }
    async search(query, page = 1, pageSize = 10) {
        const from = (page - 1) * pageSize;
        const searchResult = await this.eSclient.search({
            index: 'platform_pname_index',
            body: {
                query: {
                    multi_match: {
                        query: query,
                        fields: ['platform', 'name'],
                    },
                },
                from: from,
                size: pageSize,
            },
        });
        const hits = searchResult.hits.hits.map((hit) => hit._source);
        const total = typeof searchResult.hits.total === 'number'
            ? searchResult.hits.total
            : searchResult.hits.total.value;
        console.log('Hits: ', hits);
        console.log('Total: ', total);
        return {
            hits: hits,
            total: total,
            page: page,
            pageSize: pageSize,
        };
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService])
], SearchService);
//# sourceMappingURL=search.service.js.map