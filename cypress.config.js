const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5q9ui9',
  e2e: {
    baseUrl: "http://automationpractice.com/index.php",
    viewportWidth: 1000,
    viewportHeight: 660,
    defaultCommandTimeout: 20000,
    requestTimeout: 40000,
    video: false,
    screenshotOnRunFailure: false,
  }
});