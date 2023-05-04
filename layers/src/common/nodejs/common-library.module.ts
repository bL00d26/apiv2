import { Global, Module } from '@nestjs/common';
import { ApiConfigModule } from './api-config/api-config.module';

@Global()
@Module({
  imports: [ ApiConfigModule],
  exports: [ ApiConfigModule],
})
export class CommonLibraryModule {}
