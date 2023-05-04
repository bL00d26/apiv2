import { MongooseModule } from '@nestjs/mongoose';

import { ApiConfigModule } from '../api-config/api-config.module';
import { ApiConfigService } from '../api-config/api-config.service';

export const databaseProviders = [
  MongooseModule.forRootAsync({
    imports: [ApiConfigModule],
    useFactory: async (apiConfigService: ApiConfigService) => {
      const {
        autoIndexEnabled: autoIndex,
        poolSize,
        uri,
        test_uri,
      } = apiConfigService.databaseSettings;
      const { environment } = apiConfigService.appSettings;
      return {
        uri: environment === 'test' ? test_uri : uri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex,
        serverSelectionTimeoutMS: 60000,
        heartbeatFrequencyMS: 3000,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 35000,
        keepAliveInitialDelay: 5000,
        maxPoolSize: poolSize || 1,
      };
    },
    inject: [ApiConfigService],
  }),
];

