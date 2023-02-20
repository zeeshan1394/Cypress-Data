const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {

    url : "https://rahulshettyacademy.com"

  },
  
  projectId: "wp6mur",

  retries: {
    runMode: 1,
    },

  e2e: {
    
    setupNodeEvents,

    supportFile: 'support/e2e.js',
    //specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    
   // specPattern: 'cypress/Integeration/*.js'
    specPattern: 'cypress/Integeration/BDD/*.feature'
    //specPattern: 'cypress/integration/**/*.js'
  },
});
