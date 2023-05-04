import { Module, Global } from '@nestjs/common';

import { ApiConfigModule } from '../api-config/api-config.module';
import { BaseLambda } from '../common/lambdas';
import { DynamoDBService } from './dynamo-db.service';
import { EventBridgeService } from './event-bridge.service';
import { S3BucketService } from './s3.service';
@Global()
@Module({
  imports: [ApiConfigModule],
  providers: [BaseLambda, DynamoDBService, EventBridgeService, S3BucketService],
  exports: [BaseLambda, DynamoDBService, EventBridgeService, S3BucketService],
})
export class AwsModule {}
