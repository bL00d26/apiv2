export const X_TRINITIP_APP_INSTALLATION_ID = 'x-trinitip-app-installation-id';
export const X_TRINITIP_API_KEY = 'x-trinitip-api-key';
export const X_TRINITIP_TOKEN = 'x-trinitip-token';
export const NEP_ENTERPRISE_UNIT = 'nep-enterprise-unit';
export const CACHE_CONTROL = 'cache-control';
export const XTRINITIP_ORGANIZATION_ID = 'x-trinitip-organization-id';
export const CONTENT_TYPE = 'content-type';

const MAX_AGE = 365 * 24 * 60 * 60;
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
    X_TRINITIP_API_KEY,
    X_TRINITIP_APP_INSTALLATION_ID,
    XTRINITIP_ORGANIZATION_ID,
    X_TRINITIP_TOKEN,
    NEP_ENTERPRISE_UNIT,
    CACHE_CONTROL,
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export { MAX_AGE, CORS_OPTIONS };
