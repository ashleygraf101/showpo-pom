/**
 * These are the locators for the Login - Login & Signup Tabs.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
// LOGIN
  EMAIL_ADDRESS_FIELD: By.id('login-form-email'),
  PASSWORD_FIELD: By.css('login-form-password'),
  REMEMBER_ME_BUTTON: By.id('rememberMe'),
  FORGOT_PASSWORD_LINK: By.id('password-reset'),
  LOGIN_BUTTON: By.css('.login-button'),
  LOGIN_WITH_FB_BUTTON: By.css('.btn-facebook')
// SIGN UP
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