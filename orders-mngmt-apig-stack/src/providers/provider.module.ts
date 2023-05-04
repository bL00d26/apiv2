import { Module } from '@nestjs/common';
import { ProviderFactory } from './provider.factory';
import { TrinitipModule } from './trinitip/trinitip.module';

@Module({
  imports: [TrinitipModule],
  providers: [ProviderFactory],
  exports: [ProviderFactory],
})
export class ProvidersModule {}
