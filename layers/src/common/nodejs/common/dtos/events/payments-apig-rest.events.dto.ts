import { OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PaymentsEntity } from '../../interfaces/OrderPaymentRequest.interface';
import { BaseEventDto } from './event.dto';

//CronJobScheduledAuthorizationLambda//
class CronJobScheduledAuthorizationEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The date to query',
    example: '2022-09-14',
  })
  authorizationsAt: string;
}

export class CronJobScheduledAuthorizationEventDto extends OmitType(
  BaseEventDto,
  ['detail'] as const,
) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      authorizationsAt: '2022-09-14',
    },
  })
  detail: CronJobScheduledAuthorizationEventDetail;
}
//CronJobScheduledAuthorizationLambda//

//CronJobScheduledPaymentLambda//
class CronJobScheduledPaymentEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The date to query',
    example: '2022-09-14',
  })
  paymentsAt: string;
}

export class CronJobScheduledPaymentEventDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      paymentsAt: '2022-09-14',
    },
  })
  detail: CronJobScheduledPaymentEventDetail;
}

//SaveScheduledPaymentLambda//
export class SaveScheduledPaymentEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description:
      'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
    example: '62d9aecc6151e00009b9c4b3',
  })
  OrderID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The unique id from payment to be saved',
    example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
  })
  PaymentID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Payments Engine Version',
    example: '/v1',
  })
  Version: string;
}

export class SaveScheduledPaymentEventDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
      Version: '/v1',
    },
  })
  detail: SaveScheduledPaymentEventDetail;
}
//SaveScheduledPaymentLambda//

//UpdatecheduledPaymentLambda//
export class UpdateScheduledPaymentEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description:
      'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
    example: '62d9aecc6151e00009b9c4b3',
  })
  OrderID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The unique id from payment to be saved',
    example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
  })
  PaymentID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Payments Engine Version',
    example: '/v1',
  })
  Version: string;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description:
      'The pickup date for the order ScheduledPayment that will be queried',
    example: '2022-03-04',
  })
  OrderDate: string;
}

export class UpdateScheduledPaymentEventDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
      Version: '/v1',
    },
  })
  detail: UpdateScheduledPaymentEventDetail;
}
//UpdateScheduledPaymentLambda//

//RefundFailedSchedulingPaymentLambda//
class RefundFailedSchedulingPaymentEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The unique id from the order payment request to be queried',
    example: '62d9aecc6151e00009b9c4b3',
  })
  OrderID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The unique id from payment to be saved',
    example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
  })
  PaymentID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The error that caused this labmda to be triggered',
    example: {},
  })
  error: any;
}

export class RefundFailedSchedulingPaymentEventDto extends OmitType(
  BaseEventDto,
  ['detail'] as const,
) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
      error: {},
    },
  })
  detail: RefundFailedSchedulingPaymentEventDetail;
}

//RefundFailedSchedulingPaymentLambda//

//PayOrderCoreLambda//
export class PayOrderCoreLambdaEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description:
      'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
    example: '62d9aecc6151e00009b9c4b3',
  })
  OrderID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The unique id from payment to be saved',
    example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
  })
  PaymentID: string;

  @IsOptional()
  @Expose()
  @ApiProperty({
    description: 'The id for a payment previously processed',
    example: 'pi_3LT9KCLdi0rInq0r3RJKhLXH',
  })
  PaymentIntent: string;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Payments Engine Version',
    example: '/v1',
  })
  Version: string;
}

export class PayOrderCoreLambdaEventDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    },
  })
  detail: PayOrderCoreLambdaEventDetail;
}

//PayOrderCoreLambda//

//RefundOrderCoreLambda//
export class RefundOrderCoreLambdaEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description:
      'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
    example: '62d9aecc6151e00009b9c4b3',
  })
  OrderID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The unique id from payment to be saved',
    example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
  })
  PaymentID: string;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Payments Engine Version',
    example: '/v1',
  })
  Version: string;
}

export class RefundOrderCoreLambdaEventDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    },
  })
  detail: RefundOrderCoreLambdaEventDetail;
}

//RefundOrderCoreLambda//

//PaymentManagerCoreLambda//
export class PaymentManagerCoreLambdaEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description:
      'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
    example: '62d9aecc6151e00009b9c4b3',
  })
  OrderID: string;
  @IsOptional()
  @Expose()
  @ApiProperty({
    description:
      'The array of payments to be processed by the payments manager',
  })
  Payments?: PaymentsEntity[];

  @IsOptional()
  @Expose()
  @ApiProperty({
    description: 'The unique id from payment to be saved',
    example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
  })
  PaymentID?: string;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Payments Engine Version',
    example: '/v1',
  })
  Version: string;

  @IsOptional()
  @Expose()
  @ApiProperty({
    description: 'The Order new pickup date',
    example: '2023-04-02T18:48:00.000Z',
  })
  NewDate?: string;
}

export class PaymentManagerCoreLambdaEventDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    },
  })
  detail: PaymentManagerCoreLambdaEventDetail;
}
export class PaymentManagerCoreLambdaFailedPaymentSchedulingEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['Payments', 'PaymentID'] as const,
) {}

export class PaymentManagerCoreLambdaprocessSuccessfulPaymentEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['PaymentID'] as const,
) {}
export class PaymentManagerCoreLambdaprocessInvoiceDraftEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['PaymentID'] as const,
) {}
export class PaymentManagerCoreLambdaprocessPaymentRequestEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['PaymentID'] as const,
) {}

export class PaymentManagerCoreLambdaprocessFailedPaymentEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['Payments'] as const,
) {}
export class PaymentManagerCoreLambdaprocessRefundRequestEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['Payments', 'PaymentID'] as const,
) {}
export class PaymentManagerCoreLambdaprocessVoidRequestEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['Payments', 'PaymentID'] as const,
) {}

export class PaymentManagerCoreLambdaprocessReschedulePaymentRequestEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['PaymentID', 'Payments'] as const,
) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Order new pickup date',
    example: '2023-04-02T18:48:00.000Z',
  })
  NewDate?: string;
}

class PaymentsDetailsDto {
  @IsNotEmpty()
  @IsNumber()
  diffAmount: number;

  @IsNotEmpty()
  paymentID: string;

  @IsOptional()
  orderDate: string;
}

export class PaymentManagerCoreLambdaprocessUpchargePartialRefundEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['PaymentID', 'Payments'] as const,
) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'Payments Details',
    example: [
      { diffAmount: -15.49, PaymentID: '25665958-51ae-4c83-946c-087b6057a462' },
    ],
  })
  PaymentsDetails?: PaymentsDetailsDto[];
}

export class PaymentManagerCoreLambdaprocessSuccessfulPaymentUpchargeAndPartialRefundEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['Payments'] as const,
) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'Modification id from an upcharge or a partialRefund',
    example: '25665958-51ae-4c83-946c-087b6057a462',
  })
  ModificationID?: string;
}

//PaymentManagerCoreLambda//

//EditInvoiceCoreLambda//
export class EditInvoiceCoreLambdaEventDetail extends OmitType(
  PaymentManagerCoreLambdaEventDetail,
  ['Payments'] as const,
) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Order new pickup date',
    example: '2023-04-02T18:48:00.000Z',
  })
  OrderDate?: string;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The invoiceId on the invoices provider to be updated',
    example: 'in_1MlZl4Czpr5JpZYnvnMimAZk',
  })
  invoiceId?: string;
}
export class EditInvoiceCoreLambdaEventDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      OrderDate: '2023-04-02T18:48:00.000Z',
      invoiceId: 'in_1MlZl4Czpr5JpZYnvnMimAZk',
    },
  })
  detail: EditInvoiceCoreLambdaEventDetail;
}

//EditInvoiceCoreLambda//

//EditOrderCoreLambda//
export class EditOrderCoreLambdaEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description:
      'The unique id from the order payment request to be queried from the OrderPaymentRequest Table from DynamoDB',
    example: '62d9aecc6151e00009b9c4b3',
  })
  OrderID: string;
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The unique id from payment to be saved',
    example: 'c466829c-0ccb-5da0-9135-b640ea345b80',
  })
  PaymentID: string;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Payments Engine Version',
    example: '/v1',
  })
  Version: string;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The Order amount to be refunded/upcharged',
    example: '23.41',
  })
  DiffAmount?: number;

  @IsOptional()
  @ApiProperty({
    description: 'The order date',
    example: '2023-03-25',
  })
  OrderDate?: string;
}

export class EditOrderCoreLambdaEventDetailDto extends OmitType(BaseEventDto, [
  'detail',
] as const) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62d9aecc6151e00009b9c4b3ß',
      PaymentID: 'c466829c-0ccb-5da0-9135-b640ea345b80',
    },
  })
  detail: EditOrderCoreLambdaEventDetail;
}

export class ModificationsParam {
  @IsDefined()
  @IsString()
  state: string;

  @IsDefined()
  @IsString()
  eventType: string;

  @IsOptional()
  transactionResponse: any;

  @IsDefined()
  @IsString()
  currency: string;

  @IsDefined()
  @IsNumber()
  DiffAmount: number;
}
