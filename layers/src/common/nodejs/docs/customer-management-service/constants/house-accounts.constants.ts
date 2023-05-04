const NAME = 'House Accounts Module';

const ENDPOINTS = {
  CREATE_HOUSE_ACCOUNT: {
    SUMMARY: 'Create a House Account under a given organization',
    OK_RESPONSE: {
      status: 200,
      description: 'A House Account has been successfully created',
    },
  },
  GET_HOUSE_ACCOUNT: {
    SUMMARY: "Gets a House Account under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A House Account shall be returned',
    },
  },
  UPDATE_HOUSE_ACCOUNT_PATCH: {
    SUMMARY: "Update a House Account under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A House Account has been successfully updated',
    },
  },
  UPDATE_HOUSE_ACCOUNT_PUT: {
    SUMMARY:
      "Update a House Account under a given organization by it's id. All properties must be included (ONLY FULL UPDATE)",
    OK_RESPONSE: {
      status: 200,
      description: 'A House Account has been successfully updated',
    },
  },
  DEACTIVATE_HOUSE_ACCOUNT: {
    SUMMARY:
      "Suspend a house account under a given organization by it's id. A suspension reason must be included",
    OK_RESPONSE: {
      status: 200,
      description: 'A house account has been successfully deactivated',
    },
  },
  ACTIVATE_HOUSE_ACCOUNT: {
    SUMMARY: "Unsuspend a house account under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A house account has been successfully activated',
    },
  },
};

const houseAccountsModule = { ENDPOINTS, NAME };

export default houseAccountsModule;
