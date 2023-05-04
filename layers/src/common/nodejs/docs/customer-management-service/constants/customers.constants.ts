const NAME = 'Customers Module';

const ENDPOINTS = {
  CREATE_CUSTOMER: {
    SUMMARY: 'Create a Customer under a given organization',
    OK_RESPONSE: {
      status: 200,
      description: 'A Customer has been successfully created',
    },
  },
  GET_ALL_CUSTOMERS: {
    SUMMARY: 'Gets all customers registered under a given organization',
    OK_RESPONSE: {
      status: 200,
      description: 'An array of customers shall be returned',
    },
  },
  GET_CUSTOMER: {
    SUMMARY: "Gets a Customer under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A company shall be returned',
    },
  },
  UPDATE_CUSTOMER: {
    SUMMARY: "Update a Customer under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A Customer has been successfully updated',
    },
  },
  DELETE_CUSTOMER: {
    SUMMARY: "Remove a Customer under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A Customer has been successfully removed',
    },
  },
  GET_CUSTOMER_ADDRESSES_BY_ID: {
    SUMMARY:
      "Get a Customer list of addresses under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'An array of the customer addresses shal bee returned',
    },
  },
  ADD_CUSTOMER_ADDRESSES_BY_ID: {
    SUMMARY:
      "Add one or multiple addresses to the Customer list of addresses under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'An array of the customer addresses shall be returned',
    },
  },
  GET_CUSTOMER_ADDRESS_BY_ADDRESS_ID: {
    SUMMARY: "Get a Customer address under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'An Address of the customer shall be returned',
    },
  },
  UPDATE_CUSTOMER_ADDRESS_BY_ADDRESS_ID: {
    SUMMARY: "Update a Customer address under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'An Address of the customer shall be returned',
    },
  },
  DELETE_CUSTOMER_ADDRESS_BY_ADDRESS_ID: {
    SUMMARY: "Delete a Customer address under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'The deleted Address of the customer shall be returned',
    },
  },
  DEACTIVATE_CUSTOMER: {
    SUMMARY: "Deactivates a customer under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'No data returned',
    },
  },
  ACTIVATE_CUSTOMER: {
    SUMMARY: "Activates a customer under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'No data returned',
    },
  },
};

const customersModule = { ENDPOINTS, NAME };

export default customersModule;
