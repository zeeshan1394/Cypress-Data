Feature: End to end Ecommerce Validation

    application Regression
    
    @Regression
    Scenario: Ecommerce Product Delivery
    Given I open Ecommerce Application page
    When I add item to the cart
    And Validate the total price
    Then select the country submitt and verify thanyou
    
    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce Application page
    When I fill the form details
    |name|gender|
    |Ali |Male|                               
    Then Validate the form baheviour
    And Select the shop page