import { IsNotEmpty, IsOptional } from 'class-validator';

export class DynamoReferenceItemInputDto {
  @IsNotEmpty()
  TableName: string;
  @IsNotEmpty()
  Key: any;
  @IsOptional()
  ConsistentRead: boolean;
}
