import { Injectable } from '@nestjs/common';
import { LambdaDTO } from './dto/lambda.dto';
import * as AWS from 'aws-sdk';

@Injectable()
export class LambdaService {
  private lambda: AWS.Lambda;

  constructor() {
    this.lambda = new AWS.Lambda({
      region: 'us-east-1',
      accessKeyId: 'access-key-id',
      secretAccessKey: 'secret-access-key',
    });
  }

  async invoke(dto: LambdaDTO): Promise<any> {
    const params: AWS.Lambda.Types.InvocationRequest = {
      FunctionName: dto.functionName,
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify(dto.payload),
    };

    try {
      const result = await this.lambda.invoke(params).promise();
      return JSON.parse(result.Payload as string);
    } catch (error) {
      console.error('Error invoking Lambda function:', error);
      throw error;
    }
  }
}
