/**
 * These are the locators for the Student Discount Signup pages.
 *
 * @author Ashley Graf
 */
var By = require('selenium-webdriver').By;

module.exports = {
// SIGNUP
// Email field
  EMAIL_FIELD: By.css('[aria-label="Email address"]'),
// Confirm email field
  CONFIRM_EMAIL_FIELD: By.css('[aria-label="Confirm email address"]'),
// Password field
  PASSWORD_FIELD: By.css('[aria-label="Password"]'),
// Confirm password field
  CONFIRM_PASSWORD_FIELD: By.css('[aria-label="Confirm password"]'),
// Gender field
  FEMALE_GENDER: By.id('rbFemale'),
  MALE_GENDER: By.id('rbMale'),
  PREFER_NOT_GENDER: By.id('rbUnisex'),
// Confirm over 18 & comply etc box
  TERMS_CHECKBOX: By.id('AP_Register_chkAgreeToTerms'),
// Join now button
  CONFIRM_BUTTON: By.css('#AP_Register > section.studAnon > form > button'),
// Log in link
  LOG_IN_BUTTON: By.css('a.button.btnLogIn')
};