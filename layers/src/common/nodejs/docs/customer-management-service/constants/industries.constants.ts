const NAME = 'Industries Module';

const ENDPOINTS = {
  GET_ALL_INDUSTRIES: {
    SUMMARY: 'Get a list of all the industries.',
    OK_RESPONSE: {
      status: 200,
      description: 'An array of industries shall be returned.',
    },
  },

  GET_INDUSTRY: {
    SUMMARY: "Get an industry by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'An industry shall be returned',
    },
    NOT_FOUND_RESPONSE: {
      status: 404,
    },
  },
};

const industriesModule = { ENDPOINTS, NAME };

export default industriesModule;
