/** 
*
* Cart page test file
*
* @author Ashley Graf
*/

var BasePage = require('../BasePage');
var { describe, it, after, before } = require("selenium-webdriver/testing"),
  assert = require("assert");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var should = chai.should();
var Cart = require("../pages/CartPage");
var Catalog = require("../pages/CatalogPage");
chai.use(chaiAsPromised);
var cart_page;

describe("Cart Test Suite", function () {
	time.timeout(7000);

	beforeEach(function () {
		cart_page = new Cart();
		catalogPage = new Catalog();
		catalogPage.goToUrl("https://showpo.com/dresses/");
		catalogPage.AddFirstAvailableSizeToCart();
		cart_page.goToUrl("https://www.showpo.com/cart/");
		catalogPage.cartQuantity().should.eventually.have.length.above(0);
	});


});