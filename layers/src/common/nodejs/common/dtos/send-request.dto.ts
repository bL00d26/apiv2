import { AxiosRequestConfig } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';
import { IsDefined, IsOptional } from 'class-validator';
import { HttpMethods } from '../enum';

export class SendRequestDto {
  @IsDefined()
  method: HttpMethods;
  @IsOptional()
  config?: AxiosRequestConfig;
  @IsOptional()
  payload?: any;
  @IsDefined()
  url: string;
}
