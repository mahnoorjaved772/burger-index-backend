import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { SearchService } from '../search/search.service';
import { ProductSearchResults } from './dto/search-product.input';
import { ProductPagination } from './dto/product.pagination.output';
export declare class ProductsService {
    private readonly productRepository;
    private readonly searchService;
    constructor(productRepository: Repository<Product>, searchService: SearchService);
    create(createProductInput: CreateProductInput): Promise<Product>;
    findAll(page: number, pageSize: number): Promise<ProductPagination>;
    findOne(platformProductId: string): Promise<Product>;
    findAndUpdate(platformProductId: string, updateProductInput: UpdateProductInput): Promise<Product>;
    update(product: Product, updateProductInput: UpdateProductInput): Promise<Product>;
    searchProducts(query: string, page: number, pageSize: number): Promise<ProductSearchResults>;
}
