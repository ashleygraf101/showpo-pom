/**
 * These are the locators for the Minicart page.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
  MINICART_QUANTITY: By.css('span.minicart-quantity'),
  REMOVE_ITEM_LINK: By.css('div.line-item-remove > a > span'),
  VIEW_BAG_BUTTON: By.css('[title="View bag"]'),
  CHECKOUT_BUTTON: By.css('a.checkout-btn'),
};