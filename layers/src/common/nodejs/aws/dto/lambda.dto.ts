import { IsNotEmpty } from 'class-validator';
export class LambdaDTO {
  @IsNotEmpty()
  payload: any;
  @IsNotEmpty()
  functionName:string;
}