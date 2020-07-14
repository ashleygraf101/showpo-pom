/**
 * These are the locators for the Cart - Login page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
  PASSWORD_FIELD: By.id("login-form-password"),
  FORGOT_PASSWORD_BUTTON: By.id("password-reset"),
  CONTINUE_WITH_FB: By.class('login-button'),
};
