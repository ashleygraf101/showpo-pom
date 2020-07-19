/**
 * These are the locators for the Login - Login Tab page.
 *
 * @author Ashley Graf
 */

'use strict';

var By = require('selenium-webdriver').By;

module.exports = {
  EMAIL_ADDRESS_FIELD: By.id('login-form-email'),
  PASSWORD_FIELD: By.css('login-form-password'),
  REMEMBER_ME_BUTTON: By.id('rememberMe'),
  FORGOT_PASSWORD_LINK: By.id('password-reset'),
  LOGIN_BUTTON: By.css('.login-button'),
  LOGIN_WITH_FB_BUTTON: By.css('.btn-facebook')
};