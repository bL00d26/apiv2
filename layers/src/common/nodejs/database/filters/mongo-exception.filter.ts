import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

import { MongoError } from 'mongodb-core';
import { Error } from 'mongoose';
import { Response } from 'express';

import { IMongoException } from '../interfaces/mongo-exception.interface';
import {
  MONGO_BASE_ERROR,
  MONGO_VALIDATION_ERROR,
} from '../database.constants';

@Catch(MongoError, Error.ValidationError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError | Error.ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const payload = this.parseError(exception);
    response.status(payload.statusCode).json(payload);
  }

  parseError(exception: MongoError | Error.ValidationError) {
    let payload: IMongoException;
    if (exception.name === MONGO_BASE_ERROR) {
      payload = {
        code: exception.code,
        message: exception.errmsg,
        statusCode: HttpStatus.CONFLICT,
      };
    } else if (exception.name === MONGO_VALIDATION_ERROR) {
      const property = Object.keys(exception.errors).shift();
      payload = {
        message: `${exception._message} ${property}. ${exception.errors[property].message}`,
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      };
    }
    return payload;
  }
}
