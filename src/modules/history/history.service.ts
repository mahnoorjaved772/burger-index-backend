import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './entities/history.entity'; // Import your History entity
import { HistoryPagination } from './dto/history-pagination.output';

@Injectable()
export class HistoryService {
  findAndCount(arg0: {
    where: { platformProductId: string };
    take: number;
    skip: number;
  }): [any, any] | PromiseLike<[any, any]> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}

  // Method to insert new history record
  async create(historyInput: History): Promise<History> {
    const history = this.historyRepository.create(historyInput);
    return this.historyRepository.save(history);
  }

  // Method to find all history records with pagination
  async findAll(skip = 0, take = 10): Promise<History[]> {
    return this.historyRepository.find({
      skip,
      take,
    });
  }

  // Method to find a history record by platformProductId
  async findByPlatformProductId(
    platformProductId: string,
  ): Promise<History | undefined> {
    return this.historyRepository.findOne({
      where: { platformProductId },
    });
  }

  async findHistoryByPlatformProductId(
    platformProductId: string,
    page: number,
    pageSize: number,
  ): Promise<HistoryPagination> {
    const [items, totalCount] = await this.historyRepository.findAndCount({
      where: {
        platformProductId,
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
    });

    return {
      items,
      totalCount,
      page,
      pageSize,
    };
  }
}
