Feature: ProductPage Test
  As a user I should see six products on the page
@smoke
  Scenario: Verify that six products are displayed on the product page
    Given I am on homepage
    When I enter username “standard_user”
    And I enter password “secret_sauce”
    And I click on login button
    Then I should see six products on the product page
