import { IsNotEmpty } from 'class-validator';

export class DynamoPutItemInputDto {
  @IsNotEmpty()
  TableName: string;
  @IsNotEmpty()
  Item: any;
}
