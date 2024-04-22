import { forwardRef, Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformsResolver } from './platforms.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Platform } from './entities/platform.entity';
import { ProvidersModule } from 'src/modules/providers/providers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Platform]),
    forwardRef(() => ProvidersModule),
  ],
  providers: [PlatformsResolver, PlatformsService],
  exports: [PlatformsService],
})
export class PlatformModule {}
