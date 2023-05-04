import { ConflictException, Injectable } from '@nestjs/common';
import { AWS } from '../common/plugins';
import { ApiConfigService } from '../api-config/api-config.service';
import { S3_ERROR_MESSAGES } from './aws.constants';
import {
  GetObjectRequest,
  PutObjectRequest,
  DeleteObjectsRequest,
} from 'aws-sdk/clients/s3';
import { SIGNED_URL_DEFAUL_PARAMS } from './constants/s3.constants';

const { CONFLICT_ERROR } = S3_ERROR_MESSAGES;

@Injectable()
export class S3BucketService {
  private readonly s3Bucket: AWS.S3;
  private bucket: string;

  constructor(private readonly apiConfigService: ApiConfigService) {
    const { region } = this.apiConfigService.awsSettings;
    AWS.config.update({
      region,
    });
    this.s3Bucket = new AWS.S3();
  }

  async uploadObject(params: any): Promise<AWS.S3.ManagedUpload.SendData> {
    const s3Params: PutObjectRequest = {
      ...params,
      Bucket: this.bucket,
    };
    try {
      return await this.s3Bucket.upload(s3Params).promise(); //.promise();
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }
  async generatePublicUrl(params: any): Promise<string> {
    const s3Params: GetObjectRequest = {
      Expires: 60 * 60,
      ...params,
      Bucket: this.bucket,
    };

    try {
      return await this.s3Bucket.getSignedUrl('getObject', s3Params); //.promise();
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }
  async removeObjects(params: any): Promise<any> {
    const s3Params: DeleteObjectsRequest = {
      Bucket: this.bucket,
      Delete: {
        Objects: [...params],
      },
    };

    try {
      return await this.s3Bucket.deleteObjects(s3Params, function (err, data) {
        if (err) {
          throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
        }
      }); //.promise();
    } catch (err) {
      throw new ConflictException(`${CONFLICT_ERROR}: ${err}`);
    }
  }

  async getSignedUrlPromise(
    params,
    action = SIGNED_URL_DEFAUL_PARAMS.action,
  ): Promise<{ uploadURL: string; Key: string }> {
    params.Expires = params.Expires || SIGNED_URL_DEFAUL_PARAMS.Expires;
    params.Bucket = this.bucket;

    const uploadURL = await this.s3Bucket.getSignedUrlPromise(action, params);
    return {
      uploadURL: uploadURL,
      Key: params.Key,
    };
  }

  setBucket(bucketName: string) {
    switch (bucketName) {
      case 'assets': {
        this.bucket = this.apiConfigService.awsSettings.s3Bucket.assets;
        break;
      }
    }
  }
}
