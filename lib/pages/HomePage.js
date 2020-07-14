/**
 * These are the locators for the Home page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

// Search icon button

// Account button
var ACCOUNT_BUTTON - 'a[href="/login/"]';
// Wishlist link
var WISH_LIST_LINK = 'a.miniwishlist-link';
// Mini cart link
var MINICART_LINK = '.minicart-link';
// Switch currency dropdown
var CURRENCY_OPTIONS = '#dropdownCountrySelector';
// Newsletter subscription email field
var NEWSLETTER_SIGNUP_EMAIL_FIELD = '#hpEmailSignUp';
// Newsletter subscription go button
var NEWSLETTER_SIGNUP_SUBMIT_BUTTOM = '.subscribe-email';
// All first level header links

// All footer links