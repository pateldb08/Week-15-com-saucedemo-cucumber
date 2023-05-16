package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import com.saucedemo.pages.ProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter username “standard_user”$")
    public void iEnterUsernameStandard_user() {
        new LoginPage().enterUserName("standard_user");
    }

    @And("^I enter password “secret_sauce”$")
    public void iEnterPasswordSecret_sauce() {
        new LoginPage().enterPassword("secret_sauce");
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertEquals(new ProductPage().getProductText(), "Products");
    }
}

