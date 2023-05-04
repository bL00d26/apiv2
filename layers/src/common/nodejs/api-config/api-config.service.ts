import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  IAppSettings,
  IDatabaseSettings,
  IAwsSettings,
  ICustomerSettings,
  IPaymentsApiGSettings,
  IOrdermngmtApiGSettings,
  IOrdermngmtServiceSettings,
} from './interfaces';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  get appSettings(): IAppSettings {
    return this.configService.get('appSettings');
  }

  get databaseSettings(): IDatabaseSettings {
    return this.configService.get('databaseSettings');
  }

  get awsSettings(): IAwsSettings {
    return this.configService.get('awsSettings');
  }

  get customerSettings(): ICustomerSettings {
    return this.configService.get('customerSettings');
  }

  get paymentsApigSettings(): IPaymentsApiGSettings {
    return this.configService.get('PAYMENTS_APIG_REST');
  }
  get ordermngmtApigSettings(): IOrdermngmtApiGSettings {
    return this.configService.get('ORDERS_MNGMT_APIG_REST');
  }
  get ordermngmtServiceSettings(): IOrdermngmtServiceSettings {
    return this.configService.get('ORDERS_MNGMT_SERVICE');
  }
}
