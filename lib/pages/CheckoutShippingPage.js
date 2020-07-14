'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;


/**
 * Locators for the elements in this page
 * @type {string}
 */
// Edit shipping details link

// Proceed to checkout button

// Home/Work button

// Pick up near me button

// Nth address from address button button

// I have a new address button

// First shipping method button

// Last shipping method button

// Select a pickup location button

// Select a pickup location enter postcode or suburb field
/**
 * These are the locators for the Checkout - Shipping page.
 *
 * @author Ashley Graf
 */

// Select a pickup location delivery here button

// Email address field
var EMAIL_ADDRESS_FIELD = '#shippingEmaildefault';
// First name field
var FIRST_NAME_FIELD = '#shippingFirstNamedefault';
// Last name field
var LAST_NAME_FIELD = '#shippingLastNamedefault';
// Phone number field
var PHONE_NUMBER_FIELD = '#shippingPhoneNumberdefault';
// address field
var ADDRESS_FIELD = '#shippingAddressOnedefault';
// Country field
var COUNTRY_FIELD = '#shippingCountrydefault';
// City field
var CITY_FIELD = '#shippingAddressCitydefault';
// Postcode field
var ZIPCODE_FIELD = '#shippingZipCodedefault';
// state field
var STATE_FIELD = '#shippingStatedefault';
// Continue to payment button
var SUBMIT_SHIPPING_BUTTON = '.submit-shipping';