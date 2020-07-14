/**
 * These are the locators for the Returns Items page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

// Country field
var COUNTRY_FIELD = 'select#shipping-country';
// Postcode field
var POSTCODE_FIELD = 'input#postcode';
// View shipping times button
var SUBMIT_BUTTON = 'button.btn-shipping-info';