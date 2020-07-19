/**
 * These are the locators for the Order Tracking page.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
  ORDER_EMAIL_FIELD: By.id('trackorder-form-email'),
  ORDER_NUMBER_FIELD: By.id('trackorder-form-number'),
  CHECK_ORDER_BUTTON: By.css('button.check-order-button'),
};