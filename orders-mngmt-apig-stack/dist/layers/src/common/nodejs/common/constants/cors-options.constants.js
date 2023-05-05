"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CORS_OPTIONS = exports.MAX_AGE = exports.CONTENT_TYPE = exports.XTRINITIP_ORGANIZATION_ID = exports.CACHE_CONTROL = exports.NEP_ENTERPRISE_UNIT = exports.X_TRINITIP_TOKEN = exports.X_TRINITIP_API_KEY = exports.X_TRINITIP_APP_INSTALLATION_ID = void 0;
exports.X_TRINITIP_APP_INSTALLATION_ID = 'x-trinitip-app-installation-id';
exports.X_TRINITIP_API_KEY = 'x-trinitip-api-key';
exports.X_TRINITIP_TOKEN = 'x-trinitip-token';
exports.NEP_ENTERPRISE_UNIT = 'nep-enterprise-unit';
exports.CACHE_CONTROL = 'cache-control';
exports.XTRINITIP_ORGANIZATION_ID = 'x-trinitip-organization-id';
exports.CONTENT_TYPE = 'content-type';
const MAX_AGE = 365 * 24 * 60 * 60;
exports.MAX_AGE = MAX_AGE;
const CORS_OPTIONS = {
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'X-Requested-With',
        'Access-Control-Allow-Origin',
        'X-HTTP-Method-Override',
        'Content-Type',
        'Authorization',
        'Accept',
        'Accept-Language',
        'Content-Language',
        exports.X_TRINITIP_API_KEY,
        exports.X_TRINITIP_APP_INSTALLATION_ID,
        exports.XTRINITIP_ORGANIZATION_ID,
        exports.X_TRINITIP_TOKEN,
        exports.NEP_ENTERPRISE_UNIT,
        exports.CACHE_CONTROL,
    ],
    preflightContinue: false,
    optionsSuccessStatus: 204,
};
exports.CORS_OPTIONS = CORS_OPTIONS;
//# sourceMappingURL=cors-options.constants.js.map