/**
 * These are the locators for the Help Centre page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

var INPUT_FIELD = '#query';
var DELIVERY_ANSWERS = '[alt="Delivery"]';
var RETURNS_ANSWERS = '[alt="Returns"]';