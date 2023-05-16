$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("product.feature");
formatter.feature({
  "line": 1,
  "name": "ProductPage Test",
  "description": "As a user I should see six products on the page",
  "id": "productpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3362574900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that six products are displayed on the product page",
  "description": "",
  "id": "productpage-test;verify-that-six-products-are-displayed-on-the-product-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username “standard_user”",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password “secret_sauce”",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see six products on the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 121297200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsernameStandard_user()"
});
formatter.result({
  "duration": 154961000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPasswordSecret_sauce()"
});
formatter.result({
  "duration": 80299100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 98818100,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.iShouldSeeSixProductsOnTheProductPage()"
});
formatter.result({
  "duration": 35010900,
  "status": "passed"
});
formatter.after({
  "duration": 722588400,
  "status": "passed"
});
});