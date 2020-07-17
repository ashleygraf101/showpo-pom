/** 
*
* Cart page test file
*
* @author Ashley Graf
*/

var BasePage = require('../lib/BasePage');
var { describe, it, after, before } = require("selenium-webdriver/testing"),
  assert = require("assert");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var should = chai.should();
var Cart = require("../lib/pages/CartLocators");
chai.use(chaiAsPromised);
var cart_page;

describe("Cart Test Suite", function () {
	time.timeout(7000);

	beforeEach(function () {
		cart_page = new Cart();
		// call the auth setup function
		cart_page.goToUrl("https://www.showpo.com/cart/");
	});


});