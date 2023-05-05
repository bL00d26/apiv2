import { InvoiceProviderEnum } from '../../enum';
import { StripeEventInvoice, StripeWebhookEventRequest } from '../../interfaces';
import { BaseEventDto } from './event.dto';
declare class CronJobSuspendHouseAccountCoreLambdaEventDetail {
    invoicesDueDate: string;
}
declare const CronJobSuspendHouseAccountCoreLambdaEventDto_base: import("@nestjs/common").Type<Omit<BaseEventDto, "detail">>;
export declare class CronJobSuspendHouseAccountCoreLambdaEventDto extends CronJobSuspendHouseAccountCoreLambdaEventDto_base {
    detail: CronJobSuspendHouseAccountCoreLambdaEventDetail;
}
export declare class InvoiceManagerCoreLambdaEventDetail {
    OrderID: string;
    OrderDate: string;
    Amount: number;
    PaymentID: string;
    provider: InvoiceProviderEnum;
    invoice: StripeEventInvoice;
    request: StripeWebhookEventRequest;
}
export declare class InvoiceManagerCoreLambdaEvent {
    detail: InvoiceManagerCoreLambdaEventDetail;
    'detail-type': string;
}
export {};
