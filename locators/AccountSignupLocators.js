/**
 * These are the locators for the Login - Signup Tabs.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
  SIGNUP_TAB: By.css('a[href="#register"]'),
  SIGNUP_WITH_FB_BUTTON: By.css('.btn-facebook'),
  EMAIL_ADDRESS_FIELD: By.id('registration-form-email'),
  FIRST_NAME_FIELD: By.id('registration-form-fname'),
  LAST_NAME_FIELD: By.id('registration-form-lname'),
  PASSWORD_FIELD: By.id('registration-form-password'),
  CONFIRM_PASSWORD_FIELD: By.id('registration-form-password-confirm'),
  NEWSLETTER_SIGNUP_BUTTON: By.css('label.add-to-email-list-label'),
  SIGNUP_BUTTON: By.css('button.signup-button'),
};