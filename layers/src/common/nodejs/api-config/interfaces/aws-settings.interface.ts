interface IPayment {
  busName: string;
  source: string;
}

interface IOrder {
  busName: string;
  source: string;
}

interface IDelivery {
  busName: string;
  source: string;
}

interface IEventBridge {
  payments: IPayment;
  orders: IOrder;
  delivery: IDelivery;
}

interface IS3Bucket {
  assets: string;
}

interface IDynamoDB {
  paymentRequestTable: string;
  deliveryRequestTable: string;
  copyAppInstallationTable: string;
  tokenizedCardsTable: string;
}

export interface IAwsSettings {
  region: string;
  dynamoDB: IDynamoDB;
  eventBridge: IEventBridge;
  s3Bucket: IS3Bucket;
}
