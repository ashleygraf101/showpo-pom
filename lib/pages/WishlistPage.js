'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

// Delete item from Wishlist 
var REMOVE_FROM_WISHLIST = 'button.remove-from-wishlist';
// Add to cart button (first option of sizes available)
var ADD_SIZE_TO_CART = '[title="Add to bag"]';
// Add to cart button (single option)
var ADD_SINGLE_TO_CART = '.addToBagBtn';

module.exports = {
// Delete item from Wishlist 
  REMOVE_FROM_WISHLIST: By.css('button.remove-from-wishlist'),
// Add to cart button (first option of sizes available)
  ADD_SIZE_TO_CART: By.css('[title="Add to bag"]'),
// Add to cart button (single option)
  ADD_SINGLE_TO_CART: By.css('.addToBagBtn'),
};