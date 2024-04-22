import { Product } from '../entities/product.entity';
export declare class ProductSearchResults {
    items: Product[];
    totalCount: number;
    page: number;
    pageSize: number;
}
