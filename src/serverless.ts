import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Handler, Context, APIGatewayProxyEvent } from 'aws-lambda';
import { RouteHandler } from './interfaces/route-handler';

let server: Handler;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

function createRouteHandler({
  method,
  route,
  pathParam,
}: RouteHandler): Handler {
  return async (
    event: APIGatewayProxyEvent,
    context: Context,
    callback: Callback,
  ) => {
    server = server ?? (await bootstrap());
    event.path = pathParam ? `${route}/{${pathParam}}` : route;
    event.httpMethod = method;

    return server(event, context, callback);
  };
}

export const routeGet: Handler = createRouteHandler({
  method: 'GET',
  route: '/test',
  pathParam: 'id',
});
export const routePost: Handler = createRouteHandler({
  method: 'POST',
  route: '/test',
});
