import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();
    const { requestId } = request;

    response.status(statusCode).json({
      ...this.stringOrObject(exception.getResponse()),
      requestId,
    });
  }
  private stringOrObject(errorMessage: string | any) {
    if (typeof errorMessage === 'string') return { message: errorMessage };
    else return { ...errorMessage };
  }
}
