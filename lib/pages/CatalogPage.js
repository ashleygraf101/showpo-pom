'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;


/**
 * Locators for the elements in this page
 * @type {string}
 */// Add to cart button (first option of sizes available)
var ADD_TO_CART__FIRST_AVAILABLE_SIZE_BUTTON = 'button[title="Add to bag"][1]';
// Add to cart button (single option)
var ADD_TO_CART_SINGLE_OPTION_BUTTON = '.addToBagBtn';
// Select by color

// Select by brand
// Select lower price of range
// Select higher price of range
