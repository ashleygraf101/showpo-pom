'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;


/**
 * Locators for the elements in this page
 * @type {string}
 */
// Delete item from Wishlist 
var REMOVE_FROM_WISHLIST = 'button.remove-from-wishlist';
// Add to cart button (first option of sizes available)
var ADD_SIZE_TO_CART = '[title="Add to bag"]';
// Add to cart button (single option)
var ADD_SINGLE_TO_CART = '.addToBagBtn';