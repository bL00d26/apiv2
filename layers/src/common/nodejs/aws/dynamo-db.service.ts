import { ConflictException, Injectable } from '@nestjs/common';

import { ApiConfigService } from '../api-config/api-config.service';
import {
  DynamoPutItemInputDto,
  DynamoReferenceItemInputDto,
  DynamoQueryItemDto,
} from './dto';
import { AWS } from '../common/plugins';
import { DYNAMO_ERROR_MESSAGES } from './aws.constants';

const { CONFLICT_ERROR } = DYNAMO_ERROR_MESSAGES;

@Injectable()
export class DynamoDBService {
  private readonly dynamoDb: AWS.DynamoDB.DocumentClient;

  constructor(private readonly apiConfigService: ApiConfigService) {
    const { region } = this.apiConfigService.paymentsApigSettings.awsSettings;
    AWS.config.update({
      region,
    });
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
  }

  async putItem(params: DynamoPutItemInputDto): Promise<any> {
    try {
      return await this.dynamoDb.put(params).promise();
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }

  async getItem(params: DynamoReferenceItemInputDto): Promise<any> {
    try {
      return await this.dynamoDb.get(params).promise();
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }

  async getAllItems(params: DynamoQueryItemDto): Promise<any> {
    let result = null;
    let accumulated = [];
    try {
      do {
        result = await this.dynamoDb.query(params).promise();

        params.ExclusiveStartKey = result.LastEvaluatedKey;
        accumulated = [...accumulated, ...result.Items];
      } while (result.LastEvaluatedKey);
      return accumulated;
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }

  async deleteItem(params: DynamoReferenceItemInputDto): Promise<any> {
    try {
      await this.dynamoDb.delete(params).promise();
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }
}
