import { generateTestConnection } from '../common/helpers/utils';

export default () => ({
  appSettings: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    loggerMode: process.env.APP_LOGGER_MODE,
    environment: process.env.NODE_ENV,
  },
  databaseSettings: {
    autoIndexEnabled: true,
    poolSize: process.env.POOL_SIZE,
    uri: process.env.DB_URI,
    test_uri: process.env.DB_TEST_URI,
  },
  customerSettings: {
    url: process.env.CUSTOMERS_SERVICE_URL,
    port: process.env.CUSTOMERS_SERVICE_PORT,
  },
  PAYMENTS_APIG_REST: {
    appSettings: {
      port: parseInt(process.env.APP_PORT, 10) || 3000,
      loggerMode: process.env.APP_LOGGER_MODE,
      avsEnabled: process.env.APP_AVS_ENABLED,
      avsCodes:
        (process.env.APP_AVS_CODES &&
          process.env.APP_AVS_CODES.split(',').filter((c) => c)) ||
        [],
      cvsEnabled: process.env.APP_CVS_ENABLED,
      cvsCodes:
        (process.env.APP_CVS_CODES &&
          process.env.APP_CVS_CODES.split(',').filter((c) => c)) ||
        [],
    },
    awsSettings: {
      region: process.env.AWS_PROVIDER_REGION,
      eventBridge: {
        payments: {
          busName: process.env.AWS_EVENT_BRIDGE_PAYMENTS_BUS_NAME,
          source: process.env.AWS_EVENT_BRIDGE_PAYMENTS_SOURCE,
        },
        orders: {
          busName: process.env.AWS_EVENT_BRIDGE_ORDERS_BUS_NAME,
          source: process.env.AWS_EVENT_BRIDGE_ORDERS_SOURCE,
        },
      },
      dynamoDB: {
        paymentRequestTable: process.env.AWS_DYNAMO_DB_PAYMENT_REQUEST_TABLE,
        scheduledPaymentRequestTable:
          process.env.AWS_DYNAMO_DB_SCHEDULED_PAYMENT_REQUEST_TABLE,
        copyAppInstallationTable:
          process.env.AWS_DYNAMO_DB_COPY_APP_INSTALLATION_TABLE,
      },
    },
    svsSettings: {
      apiGatewayUrl: process.env.SVS_API_GATEWAY_URL,
    },
    payeezySettings: {
      apiGatewayUrl: process.env.PAYEEZY_API_GATEWAY_URL,
    },
  },
  ORDERS_MNGMT_APIG_REST: {
    awsSettings: {
      region: process.env.AWS_PROVIDER_REGION,
      dynamoDB: {
        appInstallationTable: process.env.AWS_DYNAMO_DB_APP_INSTALLATION_TABLE,
        paymentRequestTable: process.env.AWS_DYNAMO_DB_PAYMENT_REQUEST_TABLE,
      },
      eventBridge: {
        orders: {
          busName: process.env.AWS_EVENT_BRIDGE_ORDERS_BUS_NAME,
          source: process.env.AWS_EVENT_BRIDGE_ORDERS_SOURCE,
        },
        payments: {
          busName: process.env.AWS_EVENT_BRIDGE_PAYMENTS_BUS_NAME,
          source: process.env.AWS_EVENT_BRIDGE_PAYMENTS_SOURCE,
        },
      },
      cognito: {
        userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
        domain: process.env.AWS_COGNITO_DOMAIN,
        clientId: process.env.AWS_COGNITO_CLIENT_ID,
      },
    },
    ncrSettings: {
      apiGatewayUrl: process.env.NCR_API_GATEWAY_URL,
    },
    ordersSettings: {
      apiGatewayUrl: process.env.ORDERS_API_GATEWAY_URL,
      cmsUrl: process.env.CMS_API_GATEWAY_URL,
      cmsToken: process.env.CMS_BEARER_TOKEN,
      menuUrl: process.env.OMS_MENU_URL,
      locationsUrl: process.env.LOCATIONS_URL,
      weightAndsupplies: process.env.WEIGHT_AND_SUPPLIES_FLAG,
    },
    accountsSettings: {
      apiGatewayUrl: process.env.ACCOUNTS_API_GATEWAY_URL,
    },
    redisSettings: {
      url: process.env.REDIS_CACHE_URL, // The host for the redis cache cluster.
      password: process.env.REDIS_CACHE_PASSWORD, // The password for the redis cache cluster.
      ttl: process.env.REDIS_CMS_TTL_MIN, // The override TTL for the weight and supplies cache.
    },
  },
  ORDERS_MNGMT_SERVICE: {
    databaseSettings: {
      autoIndexEnabled: process.env.DB_AUTO_INDEX_ENABLED
        ? JSON.parse(process.env.DB_AUTO_INDEX_ENABLED)
        : false,
      poolSize: process.env.DB_POOL_SIZE,
      uri: process.env.DB_URI,
    },
    awsSettings: {
      region: process.env.AWS_PROVIDER_REGION,
      dynamoDB: {
        paymentRequestTable: process.env.AWS_DYNAMO_DB_PAYMENT_REQUEST_TABLE,
        deliveryRequestTable: process.env.AWS_DYNAMO_DB_DELIVERY_REQUEST_TABLE,
      },
      eventBridge: {
        payments: {
          busName: process.env.AWS_EVENT_BRIDGE_PAYMENTS_BUS_NAME,
          source: process.env.AWS_EVENT_BRIDGE_PAYMENTS_SOURCE,
        },
        orders: {
          busName: process.env.AWS_EVENT_BRIDGE_ORDERS_BUS_NAME,
          source: process.env.AWS_EVENT_BRIDGE_ORDERS_SOURCE,
        },
        delivery: {
          busName: process.env.AWS_EVENT_BRIDGE_DELIVERY_BUS_NAME,
          source: process.env.AWS_EVENT_BRIDGE_DELIVERY_SOURCE,
        },
      },
    },
  },
  awsSettings: {
    region: process.env.AWS_PROVIDER_REGION,
    eventBridge: {
      payments: {
        busName: process.env.AWS_EVENT_BRIDGE_PAYMENTS_BUS_NAME,
        source: process.env.AWS_EVENT_BRIDGE_PAYMENTS_SOURCE,
      },
      orders: {
        busName: process.env.AWS_EVENT_BRIDGE_ORDERS_BUS_NAME,
        source: process.env.AWS_EVENT_BRIDGE_ORDERS_SOURCE,
      },
    },
    dynamoDB: {
      paymentRequestTable: process.env.AWS_DYNAMO_DB_PAYMENT_REQUEST_TABLE,
      scheduledPaymentRequestTable:
        process.env.AWS_DYNAMO_DB_SCHEDULED_PAYMENT_REQUEST_TABLE,
      copyAppInstallationTable:
        process.env.AWS_DYNAMO_DB_COPY_APP_INSTALLATION_TABLE,
      tokenizedCardsTable: process.env.AWS_DYNAMO_DB_TOKENIZED_CARDS_TABLE,
    },
    s3Bucket: {
      assets: process.env.BUCKET_ASSETS,
    },
  },
});
