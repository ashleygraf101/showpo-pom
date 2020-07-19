/**
 * These are the locators for the Shipping Info page.
 *
 * @author Ashley Graf
 */

'use strict';

var By = require('selenium-webdriver').By;

module.exports = {
  COUNTRY_FIELD: By.css('select#shipping-country'),
  POSTCODE_FIELD: By.id('postcode'),
  SUBMIT_BUTTON: By.css('button.btn-shipping-info')
};