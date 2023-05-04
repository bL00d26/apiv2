import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

import {
  X_TRINITIP_APP_INSTALLATION_ID,
  X_TRINITIP_API_KEY,
} from '../constants/cors-options.constants';

@Injectable()
export class AppInstallationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { headers } = req;
    const xTrinitipAppInstallationId = headers[X_TRINITIP_APP_INSTALLATION_ID];
    const xTrinitipApiKey = headers[X_TRINITIP_API_KEY];

    if (!xTrinitipAppInstallationId) {
      const err = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: `header ${X_TRINITIP_APP_INSTALLATION_ID} should not be empty`,
        error: 'Bad Request',
      };
      throw new BadRequestException(err);
    }

    if (!xTrinitipApiKey) {
      const err = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: `header ${X_TRINITIP_API_KEY} should not be empty`,
        error: 'Bad Request',
      };
      throw new BadRequestException(err);
    }

    next();
  }
}
