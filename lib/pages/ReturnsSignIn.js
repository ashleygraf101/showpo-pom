/**
 * These are the locators for the Returns Sign In page.
 *
 * @author Ashley Graf
 */


'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
  EMAIL_ADDRESS_FIELD: By.css('input#returns-email'),
  ORDER_NUMBER_FIELD: By.css('input#order-id'),
  SUBMIT_BUTTON: By.css('button.btn-continue')
};