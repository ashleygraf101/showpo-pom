/**
 * These are the locators for the Student Discount Verification page.
 *
 * @author Ashley Graf
 */


'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

module.exports = {
// First name field
  FIRST_NAME_FIELD: By.id('AP_Wayf_txtFirstName'),
// Last name field
  LAST_NAME_FIELD: By.id('AP_Wayf_txtLastName'),
// Country field
  COUNTRY_FIELD: By.id('wayf-flag-link'),
// Institution field
  INSTITUTION_FIELD: By.id('AP_Wayf_txtInstitutionName'),
// Year of study field
  YEAR_OF_STUDY_FIELD: By.id('AP_Wayf_ddlYearOfStudy'),
// Course length field
  COURSE_LENGTH_FIELD: By.id('AP_Wayf_ddlCourseLength'),
// Continue button
  SUBMIT_BUTTON: By.css('button[data-track-prefix="verify_formcontinue_btn"]'),
// ‘Can’t find your institution’ button
  OTHER_INSTITUTION_BUTTON: By.css('button[data-track-prefix="verify_formcantfindinst_btn"]')
// ‘Studying outside of Australia’ link
};