
import ProductSelection from "./PageObjectModel/ProductSelection"

describe ('Product selection though POM', function(){
   
    before(function()
    
    {
    cy.fixture('example').then(function(data)
        {
           this.data=data
        })
    })

it ('Product execution though POM', function(){
  
    cy.visit ('https://rahulshettyacademy.com/angularpractice/')
//it will select poducts fetch data from fixture and execute the customize function in support-commant function
    const products = new ProductSelection();
        products.SelectProduct().click()

        var productArray = this.data.productsName
        productArray.forEach(element =>{
    
            cy.SelectProduct(element)
           
        })

        products.CheckOutHome().click()
        products.CheckOut().click()
        products.SearchCountry().type('Pakistan')
        products.SelectCountry().click()
        products.SelectCheckBox().click()
        products.ClickPurchaseButton().click()
        products.CheckAlert().should('be.visible').contains('Thank you! Your order will be delivered in next few weeks')
        products.ClossAlert().click()
      
    })
})