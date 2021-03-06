/**
 * These are the locators for the Cart - Login page.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
  PASSWORD_FIELD: By.id("login-form-password"),
  FORGOT_PASSWORD_BUTTON: By.id("password-reset"),
  CONTINUE_WITH_FB: By.css('.login-button'),
};
