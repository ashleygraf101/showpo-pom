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
var Account = require("../pages/AccountPage");
chai.use(chaiAsPromised);
var account_page;

describe("Account Test Suite", function () {
	time.timeout(7000);

	beforeEach(function () {
		account_page = new Account();
		// call the auth setup function
		account_page.goToUrl("https://showpo.com/account/?register=false");
	});


});