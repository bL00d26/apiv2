export interface IOrdermngmtServiceSettings {
  databaseSettings: DatabaseSettings;
  awsSettings: AwsSettings;
}
export interface DatabaseSettings {
  autoIndexEnabled: string;
  poolSize: string;
  uri: string;
}
export interface AwsSettings {
  region: string;
  dynamoDB: DynamoDB;
  eventBridge: EventBridge;
}
export interface DynamoDB {
  paymentRequestTable: string;
  deliveryRequestTable: string;
}
export interface EventBridge {
  payments: PaymentsOrOrdersOrDelivery;
  orders: PaymentsOrOrdersOrDelivery;
  delivery: PaymentsOrOrdersOrDelivery;
}
export interface PaymentsOrOrdersOrDelivery {
  busName: string;
  source: string;
}
