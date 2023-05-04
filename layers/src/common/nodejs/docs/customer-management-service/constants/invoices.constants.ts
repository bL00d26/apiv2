const NAME = 'Invoices Module';

const ENDPOINTS = {
  GET_INVOICE: {
    SUMMARY: "Gets an invoice under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'An invoice shall be returned',
    },
  },
  SEND_EMAIL: {
    SUMMARY:
      "Send an invoice email for an invoice under a given organization by it's id",
    OK_RESPONSE: {
      status: 201,
      description: 'An email shall be sent to the customer designated email',
    },
  },
  ADD_NOTE: {
    SUMMARY: "Add a note to an invoice under a given organization by it's id",
    OK_RESPONSE: {
      status: 201,
      description: 'An invoice shall be returned',
    },
  },
  GET_INVOICES_BY_SEARCH_CRITERIA: {
    SUMMARY:
      'Retrieves all invoices under a given organization by different search criteria',
    OK_RESPONSE: {
      status: 200,
      description: 'An invoices array shall be returned',
    },
  },
  GET_ALL_INVOICES_FROM_ORGANIZATION: {
    SUMMARY: 'Retrieves all invoices under a given organization ',
    OK_RESPONSE: {
      status: 200,
      description: 'An invoices array shall be returned',
    },
  },
};

const invoicesModule = { ENDPOINTS, NAME };

export default invoicesModule;
