/**
 * These are the locators for the Returns Sign In page.
 *
 * @author Ashley Graf
 */


'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

// email address field
var EMAIL_ADDRESS_FIELD = 'input#returns-email';
// order number field
var ORDER_NUMBER_FIELD = 'input#order-id';
// continue button
var CONTINUE_BUTTON = 'button.btn-continue';