import { IsOptional } from 'class-validator';

export class PayloadDto {
  @IsOptional()
  request?: any;
  @IsOptional()
  response?: any;
}
