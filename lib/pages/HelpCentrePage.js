/**
 * These are the locators for the Help Centre page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
  QUERY_FIELD: By.id('query'),
  DELIVERY_ANSWERS: By.css('[alt="Delivery"]'),
  RETURNS_ANSWERS: By.css('[alt="Returns"]'),
};