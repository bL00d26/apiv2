import { ConflictException, Injectable } from '@nestjs/common';
import { AWS } from '../common/plugins';
import { ApiConfigService } from '../api-config/api-config.service';
import { EVENT_BRIDGE_ERROR_MESSAGES } from './aws.constants';

const { CONFLICT_ERROR } = EVENT_BRIDGE_ERROR_MESSAGES;

@Injectable()
export class EventBridgeService {
  private readonly eventBridge: AWS.EventBridge;

  constructor(private readonly apiConfigService: ApiConfigService) {
    const { region } = this.apiConfigService.paymentsApigSettings.awsSettings;
    AWS.config.update({
      region,
    });
    this.eventBridge = new AWS.EventBridge();
  }

  async putEvent(params): Promise<any> {
    try {
      return await this.eventBridge.putEvents(params).promise();
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }
}
