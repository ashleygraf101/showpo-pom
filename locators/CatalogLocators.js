/**
 * These are the locators for the Catalog page.
 *
 * @author Ashley Graf
 */

'use strict';

var By = require('selenium-webdriver').By;

module.exports = {
  ADD_TO_CART_FIRST_AVAILABLE_SIZE_BUTTON: By.css('button[title="Add to bag"][1]'),
  ADD_TO_CART_SINGLE_OPTION_BUTTON: By.css(".addToBagBtn"),
};