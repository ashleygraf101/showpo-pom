'use strict';

var Promise = require('selenium-webdriver').promise;
var Until = require('selenium-webdriver').until;
var By = require('selenium-webdriver').By;

// Default wait for UI object is 10 seconds (for now)
var WAIT_TIME_PRESENT = 10000;
// Wait time before attempting any retries
var WAIT_TIME_BEFORE_RETRY = 500;
// Webdriver holder for the base page allowing to call this.driver in all page objects
var driver;
// Internal debug
var debug = false;
/**
 * Base constructor for a pageobject
 * Takes in a WebDriver object
 * Sets the Webdriver holder in the base page surfacing this to child page objects
 * @param webdriver
 * @constructor
 */
function BasePage(webdriver) {
    this.driver = webdriver;
}

/**
 * Opens the specified url
 * @param url
 * @returns {BasePage}
 */
BasePage.prototype.open = function(url) {
    this.driver.get(url);
    return this;
};

