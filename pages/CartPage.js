var Cart = require('../BasePage');
var Locator = require('../locators/CartLocators');
var validCouponCode = 'something';
var validZipcode = 2000;

Cart.prototype.deleteItemFromCart = function () {
	return this.find(Locator.DELETE_ITEM_FROM_CART).click();
};

Cart.prototype.getQuantityOfFirstProduct = function () {
	return this.find(Locator.QUANTITY_FIELD).getText();
};

Cart.prototype.enterValidShippingZipcode = function () {
	return this.find(Locator.SELECT_SHIPPING_ZIPCODE_FIELD).sendKeys(validZipcode);
};

Cart.prototype.goToCheckout = function () {
	return this.find(Locator.GO_TO_CHECKOUT_BUTTON).click();
};

Cart.prototype.goToCheckoutAsGuest = function () {
	return this.find(Locator.CHECKOUT_AS_GUEST_BUTTON).click();
};

Cart.prototype.activateCouponCode = function () {
	return this.find(Locator.COUPON_CODE_BUTTON).click();
};

Cart.prototype.enterValidCouponCode = function () {
	return this.find(Locator.couponCode).sendKeys(validCouponCode);
};

Cart.prototype.submitCouponCode = function () {
	return this.find(Locator.COUPON_CODE_SUBMIT).click();
};

module.exports = Cart;