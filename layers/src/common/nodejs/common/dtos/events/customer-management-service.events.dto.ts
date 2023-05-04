import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined, IsOptional } from 'class-validator';
import { InvoiceProviderEnum } from '../../enum';
import {
  StripeEventInvoice,
  StripeWebhookEventRequest,
} from '../../interfaces';
import { BaseEventDto } from './event.dto';

//SuspendHouseAccountCoreLambda
class CronJobSuspendHouseAccountCoreLambdaEventDetail {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The date to query',
    example: '2022-09-14',
  })
  invoicesDueDate: string;
}

export class CronJobSuspendHouseAccountCoreLambdaEventDto extends OmitType(
  BaseEventDto,
  ['detail'] as const,
) {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      invoicesDueDate: '2022-09-14',
    },
  })
  detail: CronJobSuspendHouseAccountCoreLambdaEventDetail;
}
//SuspendHouseAccountCoreLambda

//InvoiceManagerCoreLambda
export class InvoiceManagerCoreLambdaEventDetail {
  @Expose()
  @IsDefined()
  OrderID: string;

  @Expose()
  @IsDefined()
  OrderDate: string;

  @Expose()
  @IsDefined()
  Amount: number;

  @Expose()
  @IsDefined()
  PaymentID: string;

  @Expose()
  @IsOptional()
  provider: InvoiceProviderEnum;

  @Expose()
  @IsOptional()
  invoice: StripeEventInvoice;

  @Expose()
  @IsOptional()
  request: StripeWebhookEventRequest;
}

export class InvoiceManagerCoreLambdaEvent {
  @Expose()
  @IsDefined()
  detail: InvoiceManagerCoreLambdaEventDetail;

  @Expose()
  @IsDefined()
  'detail-type': string;
}
//InvoiceManagerCoreLambda
