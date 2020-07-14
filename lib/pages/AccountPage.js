/**
 * These are the locators for the Account page.
 *
 * @author Ashley Graf
 */

'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
  ACCOUNT_DETAILS_LINK: By.css('.card-header > a[href="/profile/"]'),
  CHANGE_PASSWORD_LINK: By.css('.card-header > a[href="/on/demandware.store/Sites-ShowpoAU-Site/en_AU/Account-EditPassword"]'),
  WISHLIST_LINK: By.css('.card-header > a[href="/wishlist/"]'),
  STORE_CREDIT_LINK: By.css('.card-header > a[href="/on/demandware.store/Sites-ShowpoAU-Site/en_AU/StoreCredit-StoreCreditHistory"]'),
  VIEW_ADDRESSES_LINK: By.css('.card-header > a[href="/addressbook/"]'),
  ADD_ADDRESS_LINK: By.css('.card-header > a[href="/on/demandware.store/Sites-ShowpoAU-Site/en_AU/Address-AddAddress"]'),
};