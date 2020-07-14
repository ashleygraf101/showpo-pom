'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

/**
 * Constructor for Airware Page
 * Hooks up the Webdriver holder in the base page allowing to call this.driver in page objects
 * @param webdriver
 * @constructor
 */
function AccountPage (webdriver) {
    BasePage.call(this, webdriver);
}

/**
 * Locators for the elements in this page
 * @type {string}
 */
// Add new address link
// View Wishlist link
// View store credit link
// View all addresses link
// My Addresses link in account dropdown
VAR WISHLIST_LINK = 