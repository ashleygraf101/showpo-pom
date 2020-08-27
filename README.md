## ShowPo Page Object Model with Selenium, JavaScript, Mocha, and Chai

This is one of the companions to my Showpo regression test suite case study. It details how to test ShowPo features using the Page Object Model. The Page Object Model has been chosen for the ability to rapidly swap out elements. This is important to ShowPo because they are updating the site frequently. It enables them to make their browser tests less brittle. 

I have not run it because ShowPo is a real website, and not a practice website. I think the syntax is correct, though.

# Architecture decisions

I chose Chai because I feel eCommerce lends itself to a BDD type of approach so all stakeholders can read the code.

I show Mocha to define and run the test suites because I can use it wirth third-party libraries like Chai.

I chose Selenium because it's one of the most popular browser automation methods, and an indispensable skill to have when writing e2e tests.

I chose JavaScript because it's one of the most popular programming languages and I thought I should get more practice with it. ShowPo is also partially written in JavaScript, so the developers can theoretically easily join in in the automated testing too.

I chose the Page Object Model because it's a tidy and logical way to encapsulate all the different locators so they can be found, and reused in the code. I also like that if the css selector changes, I only have to change the code in one place to make the tests that shouls pass, pass again. 
