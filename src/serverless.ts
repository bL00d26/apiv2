import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Handler, Context, APIGatewayProxyEvent } from 'aws-lambda';

let server: Handler;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}
bootstrap();

export const routeGet: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
