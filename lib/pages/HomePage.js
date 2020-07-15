/**
 * These are the locators for the Home page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
// Search icon button

  ACCOUNT_BUTTON: By.css('a[href="/login/"]'),
  WISH_LIST_LINK: By.css('a.miniwishlist-link'),
  MINICART_LINK: By.css('.minicart-link'),
  CURRENCY_OPTIONS: By.id('dropdownCountrySelector'),
  NEWSLETTER_SIGNUP_EMAIL_FIELD: By.id('hpEmailSignUp'),
  NEWSLETTER_SIGNUP_SUBMIT_BUTTOM: By.css('.subscribe-email')
};