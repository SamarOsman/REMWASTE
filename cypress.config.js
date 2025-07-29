const { defineConfig } = require("cypress");
//const { defineConfig } = require("Cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 5000,

  env: {
    url: 'https://marmelab.com/react-admin-demo/'
  },

  e2e: {
    setupNodeEvents(on, config) {
     

    },
    specPattern: 'cypress/Integration/examples/*.js',
    
    testIsolation: false
  },
});
