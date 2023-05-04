import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class OrganizationIdDto {
  @Expose()
  @IsOptional()
  @ApiProperty({
    description: 'The organization in which the company will be created',
    example: '620fec1230vb01426c',
  })
  organizationId: string;
}
