@sanity
Feature: Login Test
  As a user I want to login into Saucedemo website

  Scenario: User should login successfully with valid Credentials
    Given I am on homepage
    When I enter username “standard_user”
    And I enter password “secret_sauce”
    And I click on login button
    Then I should login successfully
