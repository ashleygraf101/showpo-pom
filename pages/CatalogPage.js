var Catalog = require('../BasePage');
var Locator = require('../locators/CatalogLocators');


Catalog.prototype.AddFirstAvailableSizeToCart = function () {
	return this.find(Locator.ADD_TO_CART_FIRST_AVAILABLE_SIZE_BUTTON).click();
};

Catalog.prototype.AddOnlyOptionToCart = function () {
	return this.find(Locator.ADD_TO_CART_SINGLE_OPTION_BUTTON).click();
};

module.exports = Catalog;