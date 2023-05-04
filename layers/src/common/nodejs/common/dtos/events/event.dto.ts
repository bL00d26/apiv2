import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';

export class BaseEventDto {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event execution payload',
    example: {
      OrderID: '62ebea7f43d20f0009407adf',
      Version: '/v1',
      PaymentID: 'f0b0628d-b985-4999-8a1d-ac2002422c34',
    },
  })
  detail: any;

  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The event name',
    example: 'ExecuteStripePayment',
  })
  'detail-type': string;
}
