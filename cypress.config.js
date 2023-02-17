const { defineConfig } = require("cypress");

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
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    
    specPattern: 'cypress/Integeration/*.js'
    //specPattern: 'cypress/integration/**/*.js'
  },
});
