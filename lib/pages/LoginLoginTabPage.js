/**
 * These are the locators for the Login - Login Tab page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;


/**
 * Locators for the elements in this page
 * @type {string}
 */
// Email address field
var EMAIL_ADDRESS_FIELD = '#login-form-email';
// Password field
var PASSWORD_FIELD = '#login-form-password';
// Remember me button
var REMEMBER_ME_BUTTON = '#rememberMe';
// Forgot password link
var FORGOT_PASSWORD_LINK = '#password-reset';
// Login button
var LOGIN_BUTTON = '.login-button';
// Log in with FB button
var LOGIN_WITH_FB_BUTTON = '.btn-facebook';