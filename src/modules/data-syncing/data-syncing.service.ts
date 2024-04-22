import { Injectable } from '@nestjs/common';
import { DataProcessService } from 'src/modules/data-processing/data-processing.service';

@Injectable()
export class DataSyncingService {
  constructor(private dataProcessService: DataProcessService) {}

  async processData(uniqueData: any[]) {
    for (const data of uniqueData) {
      await this.dataProcessService.processIncomingData(data);
    }
  }
}
