import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { PayloadDto } from './payload.dto';

export class ActivityLogDto {
  @IsNotEmpty()
  event: string;
  @IsOptional()
  @ValidateNested()
  @Type(() => PayloadDto)
  payload?: PayloadDto;
  @IsOptional()
  createdAt?: Date;
}
