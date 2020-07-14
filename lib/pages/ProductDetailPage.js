/**
 * These are the locators for the Product Detail page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;


// Select first available size button
var ADD_FIRST_AVAILABLE_SIZE_TO_CART = '[title="Add to bag"]';
// Add to bag button
var ADD_TO_BAG_BUTTON = 'button.add-to-cart';
// Size guide link
var SIZE_GUIDE_LINK = 'a#clothing-sizing-chart-link';
// Add to wishlist
var ADD_TO_WISH_LIST = 'button.add-to-wish-list';