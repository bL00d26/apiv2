import { DynamicModule, Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  imports: [TerminusModule, HttpModule],
  providers: [HealthService],
  controllers: [HealthController],
})
export class HealthModule {
  static register(configuration: any): DynamicModule {
    return {
      module: HealthModule,
      providers: [
        {
          provide: 'DATABASE_CONFIGURATION',
          useValue: configuration().databaseSettings,
        },
        {
          provide: 'CONFIGURATION',
          useValue: configuration(),
        },
        HealthService,
      ],
      exports: [HealthService],
    };
  }
}
