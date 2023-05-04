const NAME = 'Health Module';

const ENDPOINTS = {
  GET_HEALTH: {
    SUMMARY: 'Get the general health from the service',
    OK_RESPONSE: {
      status: 200,
      description: 'The health status from the service shall be returned',
    },
  },
  GET_DATABASE_HEALTH: {
    SUMMARY: 'Get the database health from the service',
    OK_RESPONSE: {
      status: 200,
      description:
        'The health status from the database connected to the service shall be returned',
    },
  },
};

const healthModule = { ENDPOINTS, NAME };

export default healthModule;
