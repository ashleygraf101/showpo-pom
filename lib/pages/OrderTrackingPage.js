/**
 * These are the locators for the Order Tracking page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
  ORDER_EMAIL_FIELD: By.id('trackorder-form-email'),
  ORDER_NUMBER_FIELD: By.id('trackorder-form-number'),
  CHECK_ORDER_BUTTON: By.css('button.check-order-button'),
};