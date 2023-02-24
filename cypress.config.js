const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url:'https://www.way2automation.com/angularjs-protractor/webtables/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
});
