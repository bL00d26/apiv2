export interface IPayeezySettings {
  apiGatewayUrl: string;
}

export interface ISvsSettings {
  apiGatewayUrl: string;
}

interface IOrder {
  busName: string;
  source: string;
}

interface IPayment {
  busName: string;
  source: string;
}

interface IEventBridge {
  payments: IPayment;
  orders: IOrder;
}

interface IDynamoDB {
  paymentRequestTable: string;
  scheduledPaymentRequestTable: string;
  copyAppInstallationTable: string;
}

export interface IPaymentsApigAwsSettings {
  region: string;
  eventBridge: IEventBridge;
  dynamoDB: IDynamoDB;
}

interface IAppSettings {
  port: number;
  loggerMode: boolean;
  avsEnabled: string;
  avsCodes: string[];
  cvsEnabled: string;
  cvsCodes: string[];
}

export interface IPaymentsApiGSettings {
  appSettings: IAppSettings;
  awsSettings: IPaymentsApigAwsSettings;
  svsSettings: ISvsSettings;
  payeezySettings: IPayeezySettings;
}
