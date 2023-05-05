"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routePost = exports.routeGet = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return (0, serverless_express_1.default)({ app: expressApp });
}
function createRouteHandler({ method, route, pathParam, }) {
    return async (event, context, callback) => {
        server = server !== null && server !== void 0 ? server : (await bootstrap());
        event.path = pathParam ? `${route}/{${pathParam}}` : route;
        event.httpMethod = method;
        return server(event, context, callback);
    };
}
exports.routeGet = createRouteHandler({
    method: 'GET',
    route: '/test',
    pathParam: 'id',
});
exports.routePost = createRouteHandler({
    method: 'POST',
    route: '/test',
});
//# sourceMappingURL=serverless.js.map