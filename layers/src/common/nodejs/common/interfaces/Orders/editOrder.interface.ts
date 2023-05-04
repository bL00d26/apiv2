import { EditOrderCoreLambdaEventDetail } from '../../dtos';
import { InvoiceStatusEnum, MicroservicesEnum } from '../../enum';

export interface IInvoiceDraftUpdatedPayload {
  OrderDate: string;
  OrderID: string;
  Amount: number;
  invoice: {
    status: InvoiceStatusEnum;
  };
  request: EditOrderCoreLambdaEventDetail;
  origin: MicroservicesEnum;
  provider: string;
  Version: string;
}
