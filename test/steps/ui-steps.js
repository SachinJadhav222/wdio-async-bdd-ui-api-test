const { Given, When, Then, Before, After }= require("cucumber");
const assert = require("cucumber-assert");
const locators = require("./../support/locator").locators;
const urls = require("./../config/urls");

Given("I visit {string}", async function(URL)  {
 console.log("Given---------------->>>>", this);
  await browser.url(urls[URL]);
  // let promise = browser.url(urls[URL])

  //   assert.equal(typeof promise.then, 'function')

  //   return promise
  console.log("Given---------------->>>>", this);
});

Then("I entered {string} at {string}", (expectedValue, selector) => {
  //console.log('Platform=============>>>>>>>>>>>>>',process.platform)
  browser.$(locators[selector]).setValue(expectedValue);
});
Then("I click on {string}", (selector) => {
  browser.$(locators[selector]).click();
});

Then("I shloud see Page title {string}", (expectedValue) => {
  // browser.getTitle().then((readValue)=>{
  // 	expect(readValue).to.contain(expectedValue)
  // })
  assert.equal(browser.getTitle(), expectedValue);
  //expect(browser.getTitle()).to.contain(expectedValue);
});

Then("I should see {string} at {string}", (expectedValue, selector) => {
  assert.equal(browser.$(locators[selector]).getText(), expectedValue);
});

Then("I should see page title {string}", (expectedValue) => {
  assert.equal(browser.getTitle(), expectedValue);
  // browser.getTitle();
});

Then("I scrolled to {string}", (selector) => {
  browser.$(locators[selector]).scrollIntoView();
});

Then(
  "I select {string} from dropdown at {string}",
  (expedtedValue, selector) => {
    browser.getTitle();
  }
);

Given("I log in to the web", () => {
  browser.url("http://zero.webappsecurity.com/login.html");
});

Then("I should see home page", () => {
  //browser.getElementText('//h3[contains(text(),"Log in to ZeroBank")]')
  console.log("This is URL =======>>>>", browser.getUrl());
  //browser.isElementDisplayed('//h3[contains(text(),"Log in to ZeroBank")]')
});
