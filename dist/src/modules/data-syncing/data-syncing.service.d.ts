import { DataProcessService } from 'src/modules/data-processing/data-processing.service';
export declare class DataSyncingService {
    private dataProcessService;
    constructor(dataProcessService: DataProcessService);
    processData(uniqueData: any[]): Promise<void>;
}
