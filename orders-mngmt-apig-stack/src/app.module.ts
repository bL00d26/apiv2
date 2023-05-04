import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProvidersModule } from './providers/provider.module';

@Module({
  imports: [ProvidersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
