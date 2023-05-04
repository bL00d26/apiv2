export interface IOrdermngmtApiGSettings {
  awsSettings: AwsSettings;
  ncrSettings: NcrSettingsOrAccountsSettings;
  ordersSettings: OrdersSettings;
  accountsSettings: NcrSettingsOrAccountsSettings;
  redisSettings: RedisSettings;
}
export interface AwsSettings {
  region: string;
  dynamoDB: DynamoDB;
  eventBridge: EventBridge;
  cognito: Cognito;
}
export interface DynamoDB {
  appInstallationTable: string;
  paymentRequestTable: string;
}
export interface EventBridge {
  orders: OrdersOrPayments;
  payments: OrdersOrPayments;
}
export interface OrdersOrPayments {
  busName: string;
  source: string;
}
export interface Cognito {
  userPoolId: string;
  domain: string;
  clientId: string;
}
export interface NcrSettingsOrAccountsSettings {
  apiGatewayUrl: string;
}
export interface OrdersSettings {
  apiGatewayUrl: string;
  cmsUrl: string;
  cmsToken: string;
  menuUrl: string;
  locationsUrl: string;
  weightAndsupplies: string;
}
export interface RedisSettings {
  url: string;
  password: string;
  ttl: string;
}
