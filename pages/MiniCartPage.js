var Minicart = require('../BasePage');
var Locator = require('../locators/MiniCartLocators');

Cart.prototype.removeFirstItem = function () {
	return this.find(Locator.REMOVE_ITEM_LINK).click();
};

Cart.prototype.viewCart = function () {
	return this.find(Locator.VIEW_BAG_BUTTON).click();
};

Cart.prototype.clickCheckout = function () {
	return this.find(Locator.CHECKOUT_BUTTON).click();
};


module.exports = Minicart;