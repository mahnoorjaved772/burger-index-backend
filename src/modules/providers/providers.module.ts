import { forwardRef, Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersResolver } from './providers.resolver';
import { Provider } from './entities/provider.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from 'src/modules/products/products.module';
import { PlatformModule } from 'src/modules/platforms/platforms.module';
import { Platform } from 'src/modules/platforms/entities/platform.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Provider, Platform]),
    ProductsModule,
    forwardRef(() => PlatformModule),
  ],
  providers: [ProvidersResolver, ProvidersService],
  exports: [ProvidersService],
})
export class ProvidersModule {}
