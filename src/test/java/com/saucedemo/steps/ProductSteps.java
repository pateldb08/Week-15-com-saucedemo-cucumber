package com.saucedemo.steps;

import com.saucedemo.pages.ProductPage;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class ProductSteps {
    @Then("^I should see six products on the product page$")
    public void iShouldSeeSixProductsOnTheProductPage() {
        //System.out.println("");
        Assert.assertEquals(String.valueOf(new ProductPage().findActualNumberOfProducts()) ,"6");


    }
}
