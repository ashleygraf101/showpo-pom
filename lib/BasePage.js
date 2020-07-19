'use strict';

var webdriver = require("selenium-webdriver");
var Promise = require('selenium-webdriver').promise;
var Until = require('selenium-webdriver').until;
var By = require('selenium-webdriver').By;
var Chrome = require('selenium-webdriver/chrome');
var Options = new.chrome.Options();

var BasePage = function () {
  this.driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(Options)
    .build();
  var driver = this.driver;

  this.goToUrl = function (url) {
    return driver.get(url);
  };

  this.find = function (element) {
    driver.wait(until.elementLocated(element), 5000);
    return driver.findElement(element);
  };
  
};

module.exports = BasePage;

// Click
// Assert element text
// Enter text
// Is enabled
// Is visible
// Hover
