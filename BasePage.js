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

  this.endSession = function () {
    return driver.quit();
  };

  this.loginButton = function () {
    return driver.findElement(By.css('a[href="/login/"]')); 
  }

  this.authedButton = function () {
    return driver.findElement(By.css('a[href="/account/"]')); 
  }

  this.logoutLink = function () {
    return driver.findElement(By.css('a.user-logout'));
  }

  this.wishlistLink = function () {
    return driver.findElement(By.css('a.miniwishlist-link'));
  }

  this.minicartLink = function () {
    return driver.findElement(By.css('.minicart-link'));
  }

  this.cartQuantity = function () {
    return driver.findElement(By.css('span.minicart-quantity'));
  }

  this.currencyOptions = function () {
    return driver.findElement(By.id('dropdownCountrySelector'));
  }

  this.newsletterSignupEmailField = function () {
    return driver.findElement(By.id('hpEmailSignUp'));
  }

  this.newsletterSignupSubmitButton = function () {
    return driver.findElement(By.css('.subscribe-email'));
  }

};

module.exports = BasePage;

// Click
// Assert element text
// Enter text
// Is enabled
// Is visible
// Hover
