/**
 * These are the locators for the Product Detail page.
 *
 * @author Ashley Graf
 */

'use strict';

var By = require('selenium-webdriver').By;

module.exports = {
  ADD_FIRST_AVAILABLE_SIZE_TO_CART: By.css('[title="Add to bag"]'),
  ADD_TO_BAG_BUTTON: By.css('button.add-to-cart'),
  SIZE_GUIDE_LINK: By.css('a#clothing-sizing-chart-link'),
  ADD_TO_WISH_LIST: By.css('button.add-to-wish-list')
};