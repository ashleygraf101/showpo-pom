/** 
*
* Account page test file
*
* @author Ashley Graf
*/

var { describe, it, after, before } = require("selenium-webdriver/testing"),
  assert = require("assert");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var should = chai.should();
var Catalog = require("../pages/CatalogPage");
chai.use(chaiAsPromised);
var catalogPage;

describe("Catalog Test Suite", function () {
	time.timeout(7000);

	beforeEach(function () {
		catalogPage = new Catalog();
		catalogPage.goToUrl("https://showpo.com/dresses/");
	});

	it("When the first available size option is clicked, it should be added to the cart.", function () {
		catalogPage.AddFirstAvailableSizeToCart();
		catalogPage.cartQuantity().should.eventually.have.length.above(0);
	});

  afterEach(function () {
    catalogPage.endSession();
  });
});