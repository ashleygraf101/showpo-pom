/**
 * These are the locators for the Help Centre page.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
  QUERY_FIELD: By.id('query'),
  DELIVERY_ANSWERS: By.css('[alt="Delivery"]'),
  RETURNS_ANSWERS: By.css('[alt="Returns"]'),
};