const NAME = 'Companies Module';

const ENDPOINTS = {
  CREATE_COMPANY: {
    SUMMARY: 'Create a Company under a given organization',
    OK_RESPONSE: {
      status: 200,
      description: 'A Company has been successfully created',
    },
  },

  GET_ALL_COMPANIES: {
    SUMMARY: 'Gets all companies registered under a given organization',
    OK_RESPONSE: {
      status: 200,
      description: 'An array of companies shall be returned',
    },
  },
  GET_ALL_CUSTOMERS_FROM_A_COMPANY: {
    SUMMARY:
      'Gets all customers registered under a company from a given organization',
    OK_RESPONSE: {
      status: 200,
      description: 'An array of customers shall be returned',
    },
  },
  GET_COMPANY: {
    SUMMARY: "Gets a Company under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A company shall be returned',
    },
  },
  UPDATE_COMPANY: {
    SUMMARY: "Update a Company under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A Company has been successfully updated',
    },
  },
  DELETE_COMPANY: {
    SUMMARY: "Remove a Company under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'A Company has been successfully removed',
    },
  },
  CREATE_TAX_EXEMPT_FOR_A_COMPANY: {
    SUMMARY:
      "Create a tax exempt and upload it's certificate to a Company under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description:
        'A Tax exempt cert has been successfully uploaded and attached to the company',
    },
  },
  UPDATE_TAX_EXEMPT_FOR_A_COMPANY: {
    SUMMARY:
      "Update an existing tax exempt from a Company under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description:
        'A Tax exempt cert information has been successfully updated',
    },
  },
  GENERATE_SIGNED_URL: {
    SUMMARY: 'Generate a tax exempt upload url from S3 BUCKET',
    OK_RESPONSE: {
      status: 200,
      description: 'A pre-signed url for file upload has been generated',
    },
  },
  DEACTIVATE_COMPANY: {
    SUMMARY: "Deactivates a company under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'No data returned',
    },
  },
  ACTIVATE_COMPANY: {
    SUMMARY: "Activates a company under a given organization by it's id",
    OK_RESPONSE: {
      status: 200,
      description: 'No data returned',
    },
  },
};

const companiesModule = { ENDPOINTS, NAME };

export default companiesModule;
