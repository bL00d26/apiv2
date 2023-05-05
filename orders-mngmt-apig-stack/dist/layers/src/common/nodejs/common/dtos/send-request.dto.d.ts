import { AxiosRequestConfig } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';
import { HttpMethods } from '../enum';
export declare class SendRequestDto {
    method: HttpMethods;
    config?: AxiosRequestConfig;
    payload?: any;
    url: string;
}
