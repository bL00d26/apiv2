import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
  ValidationError,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { XTRINITIP_ORGANIZATION_ID } from '../constants/cors-options.constants';

export const BodyWithOrganizationId = createParamDecorator(
  async (value: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;
    let body = ctx.switchToHttp().getRequest().body;
    const organizationId = headers[XTRINITIP_ORGANIZATION_ID];
    body = { ...body, organizationId };

    // Convert body to DTO object
    const dto = plainToInstance(value, body, {
      excludeExtraneousValues: true,
    });

    // Validate
    const errors: ValidationError[] = await validate(dto);

    if (errors.length > 0) {
      //Get the errors and push to custom array
      const validationErrors = errors.map((obj) =>
        Object.values(obj.constraints),
      );
      const message = `Validation failed with following Errors: ${validationErrors}`;

      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }

    return dto;
  },
);
