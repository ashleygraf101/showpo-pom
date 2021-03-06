/**
 * These are the locators for the Checkout Payment & Shipping pages.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
// SHIPPING
  EMAIL_ADDRESS_FIELD: By.id('shippingEmaildefault'),
  FIRST_NAME_FIELD: By.id('shippingFirstNamedefault'),
  LAST_NAME_FIELD: By.id('shippingLastNamedefault'),
  PHONE_NUMBER_FIELD: By.id('shippingPhoneNumberdefault'),
  ADDRESS_FIELD: By.id('shippingAddressOnedefault'),
  COUNTRY_FIELD: By.id('shippingCountrydefault'),
  CITY_FIELD: By.id('shippingAddressCitydefault'),
  ZIPCODE_FIELD: By.id('shippingZipCodedefault'),
  STATE_FIELD: By.id('shippingStatedefault'),
  SUBMIT_SHIPPING_BUTTON: By.css('.submit-shipping')
  TWILIGHT_SHIPPING_OPTION: By.css('input[value="twilight"]')
  SATURDAY_SHIPPING_OPTION: By.css('input[value="saturday"]')
  TOMORROW_SHIPPING_OPTION: By.css('input[value="afternoon"]')
  FIVE_BIZ_DAYS_SHIPPING_OPTION: By.css('input[value="express"]')
// Pick up near me button
  PICK_UP_NEAR_ME_BUTTON: By.css('click-collect'),
// Select a pickup location delivery here button

// Pick up near me email address
  PICK_UP_EMAIL_ADDRESS_FIELD: By.id('ccShippingEmaildefault'),
  PICK_UP_FIRST_NAME_FIELD: By.id('ccShippingFirstNamedefault')
  PICK_UP_LAST_NAME_FIELD: By.id('ccShippingLastNamedefault'),
  PICK_UP_PHONE_NUMBER: By.id('ccShippingPhoneNumber'),
};