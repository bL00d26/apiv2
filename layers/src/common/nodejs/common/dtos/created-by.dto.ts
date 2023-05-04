import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';

export class CreatedByDto {
  @IsDefined()
  @Expose()
  @ApiProperty({
    description: 'The ObjectId from the entity creator',
    example: '620fec1230vb01426e',
  })
  createdBy: string;
}
