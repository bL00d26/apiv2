import { PaymentsEntity } from '../../interfaces/OrderPaymentRequest.interface';
import { BaseEventDto } from './event.dto';
declare class CronJobScheduledAuthorizationEventDetail {
    authorizationsAt: string;
}
declare const CronJobScheduledAuthorizationEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class CronJobScheduledAuthorizationEventDto extends CronJobScheduledAuthorizationEventDto_base {
    detail: CronJobScheduledAuthorizationEventDetail;
}
declare class CronJobScheduledPaymentEventDetail {
    paymentsAt: string;
}
declare const CronJobScheduledPaymentEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class CronJobScheduledPaymentEventDto extends CronJobScheduledPaymentEventDto_base {
    detail: CronJobScheduledPaymentEventDetail;
}
export declare class SaveScheduledPaymentEventDetail {
    OrderID: string;
    PaymentID: string;
    Version: string;
}
declare const SaveScheduledPaymentEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class SaveScheduledPaymentEventDto extends SaveScheduledPaymentEventDto_base {
    detail: SaveScheduledPaymentEventDetail;
}
export declare class UpdateScheduledPaymentEventDetail {
    OrderID: string;
    PaymentID: string;
    Version: string;
    OrderDate: string;
}
declare const UpdateScheduledPaymentEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class UpdateScheduledPaymentEventDto extends UpdateScheduledPaymentEventDto_base {
    detail: UpdateScheduledPaymentEventDetail;
}
declare class RefundFailedSchedulingPaymentEventDetail {
    OrderID: string;
    PaymentID: string;
    error: any;
}
declare const RefundFailedSchedulingPaymentEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class RefundFailedSchedulingPaymentEventDto extends RefundFailedSchedulingPaymentEventDto_base {
    detail: RefundFailedSchedulingPaymentEventDetail;
}
export declare class PayOrderCoreLambdaEventDetail {
    OrderID: string;
    PaymentID: string;
    PaymentIntent: string;
    Version: string;
}
declare const PayOrderCoreLambdaEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class PayOrderCoreLambdaEventDto extends PayOrderCoreLambdaEventDto_base {
    detail: PayOrderCoreLambdaEventDetail;
}
export declare class RefundOrderCoreLambdaEventDetail {
    OrderID: string;
    PaymentID: string;
    Version: string;
}
declare const RefundOrderCoreLambdaEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class RefundOrderCoreLambdaEventDto extends RefundOrderCoreLambdaEventDto_base {
    detail: RefundOrderCoreLambdaEventDetail;
}
export declare class PaymentManagerCoreLambdaEventDetail {
    OrderID: string;
    Payments?: PaymentsEntity[];
    PaymentID?: string;
    Version: string;
    NewDate?: string;
}
declare const PaymentManagerCoreLambdaEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class PaymentManagerCoreLambdaEventDto extends PaymentManagerCoreLambdaEventDto_base {
    detail: PaymentManagerCoreLambdaEventDetail;
}
declare const PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID" | "Payments">>;
export declare class PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail extends PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail_base {
}
declare const PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID">>;
export declare class PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail extends PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail_base {
}
declare const PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID">>;
export declare class PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail extends PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail_base {
}
declare const PaymentManagerCoreLambdaprocessPaymentRequestEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID">>;
export declare class PaymentManagerCoreLambdaprocessPaymentRequestEventDetail extends PaymentManagerCoreLambdaprocessPaymentRequestEventDetail_base {
}
declare const PaymentManagerCoreLambdaprocessFailedPaymentEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "Payments">>;
export declare class PaymentManagerCoreLambdaprocessFailedPaymentEventDetail extends PaymentManagerCoreLambdaprocessFailedPaymentEventDetail_base {
}
declare const PaymentManagerCoreLambdaprocessRefundRequestEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID" | "Payments">>;
export declare class PaymentManagerCoreLambdaprocessRefundRequestEventDetail extends PaymentManagerCoreLambdaprocessRefundRequestEventDetail_base {
}
declare const PaymentManagerCoreLambdaprocessVoidRequestEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID" | "Payments">>;
export declare class PaymentManagerCoreLambdaprocessVoidRequestEventDetail extends PaymentManagerCoreLambdaprocessVoidRequestEventDetail_base {
}
declare const PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID" | "Payments">>;
export declare class PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail extends PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail_base {
    NewDate?: string;
}
declare class PaymentsDetailsDto {
    diffAmount: number;
    paymentID: string;
    orderDate: string;
}
declare const PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "PaymentID" | "Payments">>;
export declare class PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail extends PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail_base {
    PaymentsDetails?: PaymentsDetailsDto[];
}
declare const PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "Payments">>;
export declare class PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail extends PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail_base {
    ModificationID?: string;
}
declare const EditInvoiceCoreLambdaEventDetail_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentManagerCoreLambdaEventDetail, "Payments">>;
export declare class EditInvoiceCoreLambdaEventDetail extends EditInvoiceCoreLambdaEventDetail_base {
    OrderDate?: string;
    invoiceId?: string;
}
declare const EditInvoiceCoreLambdaEventDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class EditInvoiceCoreLambdaEventDto extends EditInvoiceCoreLambdaEventDto_base {
    detail: EditInvoiceCoreLambdaEventDetail;
}
export declare class EditOrderCoreLambdaEventDetail {
    OrderID: string;
    PaymentID: string;
    Version: string;
    DiffAmount?: number;
    OrderDate?: string;
}
declare const EditOrderCoreLambdaEventDetailDto_base: import("@nestjs/mapped-types").MappedType<Omit<BaseEventDto, "detail">>;
export declare class EditOrderCoreLambdaEventDetailDto extends EditOrderCoreLambdaEventDetailDto_base {
    detail: EditOrderCoreLambdaEventDetail;
}
export declare class ModificationsParam {
    state: string;
    eventType: string;
    transactionResponse: any;
    currency: string;
    DiffAmount: number;
}
export {};
