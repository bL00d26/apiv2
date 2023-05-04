import { Inject, Logger } from '@nestjs/common';
import { DynamoDBService } from '../../aws/dynamo-db.service';
import { EventBridgeService } from '../../aws/event-bridge.service';
import { findCredentials, prepareTransactionParams } from '../helpers/utils';

export class BaseLambda {
  @Inject(DynamoDBService) dynamoDBService: DynamoDBService;
  @Inject(EventBridgeService) eventBridgeService: EventBridgeService;
  private loggerInstance: Logger;
  constructor(lambdaName: string) {
    this.loggerInstance = new Logger(`Event Logger for ${lambdaName}`);
  }
  protected async getAppInstallationCredentials(
    TableName: string,
    AppInstallationID: string,
    ApiKey: string,
  ) {
    const params = prepareTransactionParams(TableName, AppInstallationID);
    const { Item: appInstallation } = await this.dynamoDBService.getItem(
      params,
    );

    return findCredentials(appInstallation, ApiKey);
  }
  protected async emitEvent(event) {
    const e = await this.eventBridgeService.putEvent(event);
    this.loggerInstance.log('EVENT EMITTED', JSON.stringify(event.Entries[0]));
    return e;
  }

  protected eventReceived(event) {
    this.loggerInstance.log('EVENT RECEIVED', JSON.stringify(event));
  }
}
