import {
  title,
  description,
  version,
} from './constants/document-options.constants';
import {
  companiesModule,
  industriesModule,
  customersModule,
  houseAccountsModule,
  invoicesModule,
} from './constants';

const customerManagementServiceDocumentOptions = {
  title,
  description,
  version,
  modules: {
    companiesModule,
    industriesModule,
    customersModule,
    houseAccountsModule,
    invoicesModule,
  },
};

export default customerManagementServiceDocumentOptions;
