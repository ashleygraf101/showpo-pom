/**
 * These are the locators for the Cart page.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
  DELETE_ITEM_FROM_CART: By.css('button.remove-product'),
  QUANTITY_FIELD: By.css("select.quantity"),
  SELECT_SHIPPING_COUNTRY_FIELD: By.id('shippingCountry'),
  SELECT_SHIPPING_ZIPCODE_FIELD: By.class('post-code'),
  GO_TO_CHECKOUT_BUTTON: By.css(".go-to-checkout"),
  CHECKOUT_AS_GUEST_BUTTON: By.css(".checkout-as-guest-button"),
  COUPON_CODE_BUTTON: By.css("div.coupon-code > #headingOne"),
  COUPON_CODE_FIELD: By.id("couponCode"),
  COUPON_CODE_SUBMIT: By.css("button.promo-code-btn")
};



