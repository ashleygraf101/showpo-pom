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
var MiniCart = require("../pages/MiniCartPage");
chai.use(chaiAsPromised);

describe("Cart Test Suite", function () {
	time.timeout(7000);

	beforeEach(function () {
		cartpage = new Cart();
		catalogPage = new Catalog();
		minicartPage = new MiniCart();
		catalogPage.goToUrl("https://showpo.com/dresses/");
		catalogPage.AddFirstAvailableSizeToCart();
		catalogPage.cartQuantity().should.eventually.have.length(1);
		catalogPage.minicartLink();
	});


});