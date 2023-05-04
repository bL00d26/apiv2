import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { MongoExceptionFilter } from './filters/mongo-exception.filter';
import { databaseProviders } from './database.providers';
import { DatabaseService } from './database.service';

@Module({
  imports: [...databaseProviders],
  providers: [
    {
      provide: APP_FILTER,
      useClass: MongoExceptionFilter,
    },
    DatabaseService,
  ],
  exports: [...databaseProviders, DatabaseService],
})
export class DatabaseModule {}
