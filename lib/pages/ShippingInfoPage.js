/**
 * These are the locators for the Shipping Info page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
  COUNTRY_FIELD: By.css('select#shipping-country'),
  POSTCODE_FIELD: By.id('postcode'),
  SUBMIT_BUTTON: By.css('button.btn-shipping-info')
};