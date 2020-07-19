/**
 * These are the locators for the Wishlist page.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
// Delete item from Wishlist 
  REMOVE_FROM_WISHLIST: By.css('button.remove-from-wishlist'),
// Add to cart button (first option of sizes available)
  ADD_SIZE_TO_CART: By.css('[title="Add to bag"]'),
// Add to cart button (single option)
  ADD_SINGLE_TO_CART: By.css('.addToBagBtn'),
};