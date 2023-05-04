import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import {
  HealthCheckService,
  HttpHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

import { Connection } from 'mongoose';

@Injectable()
export class HealthService {
  private readonly connection: string;
  private readonly connectionName: string;

  constructor(
    @Inject('DATABASE_CONFIGURATION') private database: any,
    @Inject('CONFIGURATION') private configuration: any,
    @InjectConnection() private readonly mongooseConnection: Connection,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: MongooseHealthIndicator,
  ) {
    this.connection = database.uri;
    this.connectionName = this.connection.split(':')[1].replace('//', '');
  }
  async getGeneralHealth() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
  async getDatabaseConnectionHealth() {
    if (this.mongooseConnection.readyState === 1) {
      return { [this.connectionName]: { status: 'up' } };
    } else {
      return { [this.connectionName]: { status: 'down' } };
    }
  }
}
