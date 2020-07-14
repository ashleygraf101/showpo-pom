/**
 * These are the locators for the Cart Email page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
  EMAIL_FIELD: By.id("login-form-email"),
  CONTINUE_BUTTON: By.css(".login-validate-email"),
  CONTINUE_WITH_FB: By.css('a.btn-facebook'),
};
