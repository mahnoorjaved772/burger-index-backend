import { Repository } from 'typeorm';
import { History } from './entities/history.entity';
import { HistoryPagination } from './dto/history-pagination.output';
export declare class HistoryService {
    private readonly historyRepository;
    findAndCount(arg0: {
        where: {
            platformProductId: string;
        };
        take: number;
        skip: number;
    }): [any, any] | PromiseLike<[any, any]>;
    constructor(historyRepository: Repository<History>);
    create(historyInput: History): Promise<History>;
    findAll(skip?: number, take?: number): Promise<History[]>;
    findByPlatformProductId(platformProductId: string): Promise<History | undefined>;
    findHistoryByPlatformProductId(platformProductId: string, page: number, pageSize: number): Promise<HistoryPagination>;
}
