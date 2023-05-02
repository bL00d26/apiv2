import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class OrderProviderTypeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { xtoken } = request?.headers;
    const providerType = this.getProviderType(xtoken);
    if (!providerType) {
      throw new NotFoundException('Invalid provider type');
    }
    request.orderType = providerType;
    return next.handle();
  }

  private getProviderType(xtoken: string): string {
    //lógica para determinar según el token el tipo de proveedor
    console.log(xtoken);
    return 'TRINITIP';
  }
}
