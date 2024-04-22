import { Product } from '../entities/product.entity';
export declare class ProductPagination {
    items: Product[];
    totalCount: number;
    page: number;
    pageSize: number;
}
