import { IsNotEmpty, IsOptional } from 'class-validator';

export class DynamoQueryItemDto {
  @IsNotEmpty()
  TableName: string;
  @IsOptional()
  ExclusiveStartKey?: any;
  @IsOptional()
  Limit?: number;
  @IsOptional()
  Keys?: any;
  @IsOptional()
  ConsistentRead?: boolean;
  @IsOptional()
  KeyConditionExpression?: string;
  @IsOptional()
  ExpressionAttributeNames?: any;
  @IsOptional()
  ExpressionAttributeValues?: any;
}
