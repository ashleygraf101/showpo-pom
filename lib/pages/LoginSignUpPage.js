/**
 * These are the locators for the Login - Sign Up Tab page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

// Sign up tab link (setup)
var SIGNUP_TAB = 'a[href="#register"]';
// Sign up with Facebook button
var SIGNUP_WITH_FB_BUTTON = '.btn-facebook';
// Email address field
var EMAIL_ADDRESS_FIELD = '#registration-form-email';
// First name field
var FIRST_NAME_FIELD = '#registration-form-fname';
// Last name field
var LAST_NAME_FIELD = '#registration-form-lname';
// Password field
var PASSWORD_FIELD = '#registration-form-password';
// Confirm password field
var CONFIRM_PASSWORD_FIELD = '#registration-form-password-confirm';
// Newsletter subscription button
var NEWSLETTER_SIGNUP_BUTTON = 'label.add-to-email-list-label';
// Sign up button
var SIGNUP_BUTTON = 'button.signup-button';