/**
 * These are the locators for the Order Tracking page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

//order email
var ORDER_EMAIL_FIELD = '#trackorder-form-email';
//order number
var ORDER_NUMBER_FIELD = '#trackorder-form-number';
//check order button
var CHECK_ORDER_BUTTON = 'button.check-order-button';