import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';
import { ProviderEnum } from '../enum';
import { X_TRINITIP_TOKEN } from '../constants/cors-options.constants';
@Injectable()
export class LoyaltyJWTInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const RequestObj = context.switchToHttp().getRequest();
    const jwtLoyalty = RequestObj.headers[X_TRINITIP_TOKEN];
    if (jwtLoyalty) {
      if (RequestObj.body.paymentMethod.provider === ProviderEnum.FREEDOM_PAY) {
        try {
          const { userID } = verify(jwtLoyalty, process.env.JWT_TOKEN_SECRET);
          RequestObj.body.paymentMethod.userID = String(userID);
        } catch (error) {
          const err = {
            statusCode: HttpStatus.BAD_REQUEST,
            message: `Invalid ${X_TRINITIP_TOKEN}`,
            error: 'Bad Request',
          };
          throw new BadRequestException(err);
        }
      }
    } else {
      const err = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: `header ${X_TRINITIP_TOKEN} should not be empty`,
        error: 'Bad Request',
      };
      throw new BadRequestException(err);
    }

    return next.handle().pipe();
  }
}
