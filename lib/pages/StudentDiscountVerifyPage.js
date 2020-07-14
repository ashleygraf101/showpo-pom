/**
 * These are the locators for the Student Discount Verification page.
 *
 * @author Ashley Graf
 */


'use strict';

var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Until = require('selenium-webdriver').until;

// First name field
var FIRST_NAME_FIELD = '#AP_Wayf_txtFirstName';
// Last name field
var LAST_NAME_FIELD = '#AP_Wayf_txtLastName';
// Country field
var COUNTRY_FIELD = '#wayf-flag-link';
// Institution field
var INSTITUTION_FIELD = '#AP_Wayf_txtInstitutionName';
// Year of study field
var YEAR_OF_STUDY_FIELD = '#AP_Wayf_ddlYearOfStudy';
// Course length field
var COURSE_LENGTH_FIELD = '#AP_Wayf_ddlCourseLength';
// Continue button
var SUBMIT_BUTTON = 'button[data-track-prefix="verify_formcontinue_btn"]';
// ‘Can’t find your institution’ button
var SUBMIT_BUTTON = 'button[data-track-prefix="verify_formcantfindinst_btn"]';
// ‘Studying outside of Australia’ link
