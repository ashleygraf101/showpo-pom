/**
 * These are the locators for the Minicart page.
 *
 * @author Ashley Graf
 */


'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;


// See number of items in cart
var MINICART_QUANTITY = 'span.minicart-quantity';
// Delete item from cart link
var REMOVE_ITEM_LINK = 'div.line-item-remove > a > span';
// View Bag button
var VIEW_BAG_BUTTON = '[title="View bag"]';
// Go to Checkout button
var CHECKOUT_BUTTON = 'a.checkout-btn';