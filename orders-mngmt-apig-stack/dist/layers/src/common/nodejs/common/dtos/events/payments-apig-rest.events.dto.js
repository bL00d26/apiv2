"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModificationsParam = exports.EditOrderCoreLambdaEventDetailDto = exports.EditOrderCoreLambdaEventDetail = exports.EditInvoiceCoreLambdaEventDto = exports.EditInvoiceCoreLambdaEventDetail = exports.PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail = exports.PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail = exports.PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail = exports.PaymentManagerCoreLambdaprocessVoidRequestEventDetail = exports.PaymentManagerCoreLambdaprocessRefundRequestEventDetail = exports.PaymentManagerCoreLambdaprocessFailedPaymentEventDetail = exports.PaymentManagerCoreLambdaprocessPaymentRequestEventDetail = exports.PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail = exports.PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail = exports.PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail = exports.PaymentManagerCoreLambdaEventDto = exports.PaymentManagerCoreLambdaEventDetail = exports.RefundOrderCoreLambdaEventDto = exports.RefundOrderCoreLambdaEventDetail = exports.PayOrderCoreLambdaEventDto = exports.PayOrderCoreLambdaEventDetail = exports.RefundFailedSchedulingPaymentEventDto = exports.UpdateScheduledPaymentEventDto = exports.UpdateScheduledPaymentEventDetail = exports.SaveScheduledPaymentEventDto = exports.SaveScheduledPaymentEventDetail = exports.CronJobScheduledPaymentEventDto = exports.CronJobScheduledAuthorizationEventDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const event_dto_1 = require("./event.dto");
class CronJobScheduledAuthorizationEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The date to query',
        example: '2022-09-14',
    }),
    __metadata("design:type", String)
], CronJobScheduledAuthorizationEventDetail.prototype, "authorizationsAt", void 0);
class CronJobScheduledAuthorizationEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, ['detail']) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            authorizationsAt: '2022-09-14',
        },
    }),
    __metadata("design:type", CronJobScheduledAuthorizationEventDetail)
], CronJobScheduledAuthorizationEventDto.prototype, "detail", void 0);
exports.CronJobScheduledAuthorizationEventDto = CronJobScheduledAuthorizationEventDto;
class CronJobScheduledPaymentEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The date to query',
        example: '2022-09-14',
    }),
    __metadata("design:type", String)
], CronJobScheduledPaymentEventDetail.prototype, "paymentsAt", void 0);
class CronJobScheduledPaymentEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            paymentsAt: '2022-09-14',
        },
    }),
    __metadata("design:type", CronJobScheduledPaymentEventDetail)
], CronJobScheduledPaymentEventDto.prototype, "detail", void 0);
exports.CronJobScheduledPaymentEventDto = CronJobScheduledPaymentEventDto;
class SaveScheduledPaymentEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
        example: '62d9aecc6151e00009b9c4b3',
    }),
    __metadata("design:type", String)
], SaveScheduledPaymentEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from payment to be saved',
        example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    }),
    __metadata("design:type", String)
], SaveScheduledPaymentEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Payments Engine Version',
        example: '/v1',
    }),
    __metadata("design:type", String)
], SaveScheduledPaymentEventDetail.prototype, "Version", void 0);
exports.SaveScheduledPaymentEventDetail = SaveScheduledPaymentEventDetail;
class SaveScheduledPaymentEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
            Version: '/v1',
        },
    }),
    __metadata("design:type", SaveScheduledPaymentEventDetail)
], SaveScheduledPaymentEventDto.prototype, "detail", void 0);
exports.SaveScheduledPaymentEventDto = SaveScheduledPaymentEventDto;
class UpdateScheduledPaymentEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
        example: '62d9aecc6151e00009b9c4b3',
    }),
    __metadata("design:type", String)
], UpdateScheduledPaymentEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from payment to be saved',
        example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    }),
    __metadata("design:type", String)
], UpdateScheduledPaymentEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Payments Engine Version',
        example: '/v1',
    }),
    __metadata("design:type", String)
], UpdateScheduledPaymentEventDetail.prototype, "Version", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The pickup date for the order ScheduledPayment that will be queried',
        example: '2022-03-04',
    }),
    __metadata("design:type", String)
], UpdateScheduledPaymentEventDetail.prototype, "OrderDate", void 0);
exports.UpdateScheduledPaymentEventDetail = UpdateScheduledPaymentEventDetail;
class UpdateScheduledPaymentEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
            Version: '/v1',
        },
    }),
    __metadata("design:type", UpdateScheduledPaymentEventDetail)
], UpdateScheduledPaymentEventDto.prototype, "detail", void 0);
exports.UpdateScheduledPaymentEventDto = UpdateScheduledPaymentEventDto;
class RefundFailedSchedulingPaymentEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from the order payment request to be queried',
        example: '62d9aecc6151e00009b9c4b3',
    }),
    __metadata("design:type", String)
], RefundFailedSchedulingPaymentEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from payment to be saved',
        example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    }),
    __metadata("design:type", String)
], RefundFailedSchedulingPaymentEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The error that caused this labmda to be triggered',
        example: {},
    }),
    __metadata("design:type", Object)
], RefundFailedSchedulingPaymentEventDetail.prototype, "error", void 0);
class RefundFailedSchedulingPaymentEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, ['detail']) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
            error: {},
        },
    }),
    __metadata("design:type", RefundFailedSchedulingPaymentEventDetail)
], RefundFailedSchedulingPaymentEventDto.prototype, "detail", void 0);
exports.RefundFailedSchedulingPaymentEventDto = RefundFailedSchedulingPaymentEventDto;
class PayOrderCoreLambdaEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
        example: '62d9aecc6151e00009b9c4b3',
    }),
    __metadata("design:type", String)
], PayOrderCoreLambdaEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from payment to be saved',
        example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    }),
    __metadata("design:type", String)
], PayOrderCoreLambdaEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The id for a payment previously processed',
        example: 'pi_3LT9KCLdi0rInq0r3RJKhLXH',
    }),
    __metadata("design:type", String)
], PayOrderCoreLambdaEventDetail.prototype, "PaymentIntent", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Payments Engine Version',
        example: '/v1',
    }),
    __metadata("design:type", String)
], PayOrderCoreLambdaEventDetail.prototype, "Version", void 0);
exports.PayOrderCoreLambdaEventDetail = PayOrderCoreLambdaEventDetail;
class PayOrderCoreLambdaEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
        },
    }),
    __metadata("design:type", PayOrderCoreLambdaEventDetail)
], PayOrderCoreLambdaEventDto.prototype, "detail", void 0);
exports.PayOrderCoreLambdaEventDto = PayOrderCoreLambdaEventDto;
class RefundOrderCoreLambdaEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
        example: '62d9aecc6151e00009b9c4b3',
    }),
    __metadata("design:type", String)
], RefundOrderCoreLambdaEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from payment to be saved',
        example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    }),
    __metadata("design:type", String)
], RefundOrderCoreLambdaEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Payments Engine Version',
        example: '/v1',
    }),
    __metadata("design:type", String)
], RefundOrderCoreLambdaEventDetail.prototype, "Version", void 0);
exports.RefundOrderCoreLambdaEventDetail = RefundOrderCoreLambdaEventDetail;
class RefundOrderCoreLambdaEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
        },
    }),
    __metadata("design:type", RefundOrderCoreLambdaEventDetail)
], RefundOrderCoreLambdaEventDto.prototype, "detail", void 0);
exports.RefundOrderCoreLambdaEventDto = RefundOrderCoreLambdaEventDto;
class PaymentManagerCoreLambdaEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
        example: '62d9aecc6151e00009b9c4b3',
    }),
    __metadata("design:type", String)
], PaymentManagerCoreLambdaEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The array of payments to be processed by the payments manager',
    }),
    __metadata("design:type", Array)
], PaymentManagerCoreLambdaEventDetail.prototype, "Payments", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from payment to be saved',
        example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    }),
    __metadata("design:type", String)
], PaymentManagerCoreLambdaEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Payments Engine Version',
        example: '/v1',
    }),
    __metadata("design:type", String)
], PaymentManagerCoreLambdaEventDetail.prototype, "Version", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Order new pickup date',
        example: '2023-04-02T18:48:00.000Z',
    }),
    __metadata("design:type", String)
], PaymentManagerCoreLambdaEventDetail.prototype, "NewDate", void 0);
exports.PaymentManagerCoreLambdaEventDetail = PaymentManagerCoreLambdaEventDetail;
class PaymentManagerCoreLambdaEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
        },
    }),
    __metadata("design:type", PaymentManagerCoreLambdaEventDetail)
], PaymentManagerCoreLambdaEventDto.prototype, "detail", void 0);
exports.PaymentManagerCoreLambdaEventDto = PaymentManagerCoreLambdaEventDto;
class PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['Payments', 'PaymentID']) {
}
exports.PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail = PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail;
class PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['PaymentID']) {
}
exports.PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail = PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail;
class PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['PaymentID']) {
}
exports.PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail = PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail;
class PaymentManagerCoreLambdaprocessPaymentRequestEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['PaymentID']) {
}
exports.PaymentManagerCoreLambdaprocessPaymentRequestEventDetail = PaymentManagerCoreLambdaprocessPaymentRequestEventDetail;
class PaymentManagerCoreLambdaprocessFailedPaymentEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['Payments']) {
}
exports.PaymentManagerCoreLambdaprocessFailedPaymentEventDetail = PaymentManagerCoreLambdaprocessFailedPaymentEventDetail;
class PaymentManagerCoreLambdaprocessRefundRequestEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['Payments', 'PaymentID']) {
}
exports.PaymentManagerCoreLambdaprocessRefundRequestEventDetail = PaymentManagerCoreLambdaprocessRefundRequestEventDetail;
class PaymentManagerCoreLambdaprocessVoidRequestEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['Payments', 'PaymentID']) {
}
exports.PaymentManagerCoreLambdaprocessVoidRequestEventDetail = PaymentManagerCoreLambdaprocessVoidRequestEventDetail;
class PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['PaymentID', 'Payments']) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Order new pickup date',
        example: '2023-04-02T18:48:00.000Z',
    }),
    __metadata("design:type", String)
], PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail.prototype, "NewDate", void 0);
exports.PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail = PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail;
class PaymentsDetailsDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaymentsDetailsDto.prototype, "diffAmount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PaymentsDetailsDto.prototype, "paymentID", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaymentsDetailsDto.prototype, "orderDate", void 0);
class PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['PaymentID', 'Payments']) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'Payments Details',
        example: [
            { diffAmount: -15.49, PaymentID: '25665958-51ae-4c83-946c-087b6057a462' },
        ],
    }),
    __metadata("design:type", Array)
], PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail.prototype, "PaymentsDetails", void 0);
exports.PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail = PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail;
class PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['Payments']) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'Modification id from an upcharge or a partialRefund',
        example: '25665958-51ae-4c83-946c-087b6057a462',
    }),
    __metadata("design:type", String)
], PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail.prototype, "ModificationID", void 0);
exports.PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail = PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail;
class EditInvoiceCoreLambdaEventDetail extends (0, mapped_types_1.OmitType)(PaymentManagerCoreLambdaEventDetail, ['Payments']) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Order new pickup date',
        example: '2023-04-02T18:48:00.000Z',
    }),
    __metadata("design:type", String)
], EditInvoiceCoreLambdaEventDetail.prototype, "OrderDate", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The invoiceId on the invoices provider to be updated',
        example: 'in_1MlZl4Czpr5JpZYnvnMimAZk',
    }),
    __metadata("design:type", String)
], EditInvoiceCoreLambdaEventDetail.prototype, "invoiceId", void 0);
exports.EditInvoiceCoreLambdaEventDetail = EditInvoiceCoreLambdaEventDetail;
class EditInvoiceCoreLambdaEventDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            OrderDate: '2023-04-02T18:48:00.000Z',
            invoiceId: 'in_1MlZl4Czpr5JpZYnvnMimAZk',
        },
    }),
    __metadata("design:type", EditInvoiceCoreLambdaEventDetail)
], EditInvoiceCoreLambdaEventDto.prototype, "detail", void 0);
exports.EditInvoiceCoreLambdaEventDto = EditInvoiceCoreLambdaEventDto;
class EditOrderCoreLambdaEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
        example: '62d9aecc6151e00009b9c4b3',
    }),
    __metadata("design:type", String)
], EditOrderCoreLambdaEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The unique id from payment to be saved',
        example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    }),
    __metadata("design:type", String)
], EditOrderCoreLambdaEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Payments Engine Version',
        example: '/v1',
    }),
    __metadata("design:type", String)
], EditOrderCoreLambdaEventDetail.prototype, "Version", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The Order amount to be refunded/upcharged',
        example: '23.41',
    }),
    __metadata("design:type", Number)
], EditOrderCoreLambdaEventDetail.prototype, "DiffAmount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'The order date',
        example: '2023-03-25',
    }),
    __metadata("design:type", String)
], EditOrderCoreLambdaEventDetail.prototype, "OrderDate", void 0);
exports.EditOrderCoreLambdaEventDetail = EditOrderCoreLambdaEventDetail;
class EditOrderCoreLambdaEventDetailDto extends (0, mapped_types_1.OmitType)(event_dto_1.BaseEventDto, [
    'detail',
]) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62d9aecc6151e00009b9c4b3ß',
            PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
        },
    }),
    __metadata("design:type", EditOrderCoreLambdaEventDetail)
], EditOrderCoreLambdaEventDetailDto.prototype, "detail", void 0);
exports.EditOrderCoreLambdaEventDetailDto = EditOrderCoreLambdaEventDetailDto;
class ModificationsParam {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModificationsParam.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModificationsParam.prototype, "eventType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], ModificationsParam.prototype, "transactionResponse", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModificationsParam.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ModificationsParam.prototype, "DiffAmount", void 0);
exports.ModificationsParam = ModificationsParam;
//# sourceMappingURL=payments-apig-rest.events.dto.js.map