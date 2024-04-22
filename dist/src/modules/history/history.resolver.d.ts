import { HistoryService } from './history.service';
import { History } from './entities/history.entity';
import { HistoryInput } from './dto/history.input';
import { HistoryPagination } from './dto/history-pagination.output';
export declare class HistoryResolver {
    private readonly historyService;
    constructor(historyService: HistoryService);
    createHistory(historyInput: HistoryInput): Promise<History>;
    findAll(skip: number, take: number): Promise<History[]>;
    findByPlatformProductId(platformProductId: string): Promise<History>;
    findByPlatformProductIdAndPlatformStoreId(platformProductId: string, page: number, pageSize: number): Promise<HistoryPagination>;
}
