import { Expose } from 'class-transformer';
import { IsDefined, IsOptional } from 'class-validator';
import {
  CONTENT_TYPE,
  XTRINITIP_ORGANIZATION_ID,
  X_TRINITIP_API_KEY,
  X_TRINITIP_APP_INSTALLATION_ID,
} from '../constants/cors-options.constants';

export class RequestHeadersDto {
  @IsDefined()
  @Expose({ name: XTRINITIP_ORGANIZATION_ID })
  [XTRINITIP_ORGANIZATION_ID]: string;
  @IsOptional()
  @Expose({ name: CONTENT_TYPE })
  [CONTENT_TYPE]: string;
}

export class AppInstallationHeadersDto {
  @IsDefined()
  @Expose({ name: X_TRINITIP_APP_INSTALLATION_ID })
  [X_TRINITIP_APP_INSTALLATION_ID]: string;
  @IsDefined()
  @Expose({ name: X_TRINITIP_API_KEY })
  [X_TRINITIP_API_KEY]: string;
}
