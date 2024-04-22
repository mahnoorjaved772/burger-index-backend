import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductSearchResults } from './dto/search-product.input';
import { SearchService } from '../search/search.service';
import { ProductPagination } from './dto/product.pagination.output';
export declare class ProductsResolver {
    private readonly productsService;
    private readonly searchService;
    constructor(productsService: ProductsService, searchService: SearchService);
    createProduct(createProductInput: CreateProductInput): Promise<Product>;
    findAllProducts(page: number, pageSize: number): Promise<ProductPagination>;
    product(platformProductId: string): Promise<Product>;
    updateProduct(platformProductId: string, updateProductInput: UpdateProductInput): Promise<Product>;
    searchProducts(query: string, page: number, pageSize: number): Promise<ProductSearchResults>;
}
