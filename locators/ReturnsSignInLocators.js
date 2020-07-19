/**
 * These are the locators for the Returns Sign In + Items pages.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
// SIGN IN
  EMAIL_ADDRESS_FIELD: By.css('input#returns-email'),
  ORDER_NUMBER_FIELD: By.css('input#order-id'),
  SUBMIT_BUTTON: By.css('button.btn-continue')
};