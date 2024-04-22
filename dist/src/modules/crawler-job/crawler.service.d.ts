import { DataExtractionService } from 'src/modules/data-extraction/data-extraction.service';
export declare class CrawlerService {
    private dataExtractionService;
    constructor(dataExtractionService: DataExtractionService);
    handleCron(): Promise<void>;
}
