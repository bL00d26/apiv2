import { CONTENT_TYPE, XTRINITIP_ORGANIZATION_ID, X_TRINITIP_API_KEY, X_TRINITIP_APP_INSTALLATION_ID } from '../constants/cors-options.constants';
export declare class RequestHeadersDto {
    [XTRINITIP_ORGANIZATION_ID]: string;
    [CONTENT_TYPE]: string;
}
export declare class AppInstallationHeadersDto {
    [X_TRINITIP_APP_INSTALLATION_ID]: string;
    [X_TRINITIP_API_KEY]: string;
}
