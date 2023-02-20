
import ProductSelection from "./PageObjectModel/ProductSelection"
import HomePage from "./PageObjectModel/HomePage"

describe ('Product selection though POM', function(){
   
    before(function()
    
    {
    cy.fixture('example').then(function(data)
        {
           this.data=data
        })
    })
 
it ('Product execution though POM', function(){
    cy.visit(Cypress.env('url') + "/angularpractice/")
  
   // cy.visit ('https://rahulshettyacademy.com/angularpractice/')

//it will select poducts fetch data from fixture and execute the customize function in support-commant function
    const products = new ProductSelection();
        products.SelectProduct().click()

        var productArray = this.data.productsName
        productArray.forEach(element =>{
    
            cy.SelectProduct(element)
           
        })
        
        products.CheckOutHome().click()
        var sum = 0
       
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
           
            const amount = $el.text()
            var result = amount.split(" ")
            result = result[1].trim()
            sum = Number(sum)+Number(result)
            
            }).then(function(){
                cy.log(sum)

            })

            cy.get('h3 strong').then(function(element){
                const amount = element.text()
                var totalresult = amount.split(" ")
                totalresult = totalresult[1].trim()
                expect(Number(totalresult)).to.eq(sum)

            })
            
        products.CheckOut().click()
        products.SearchCountry().type('Pakistan')
        products.SelectCountry().click()
        products.SelectCheckBox().click({force:true})
        products.ClickPurchaseButton().click()
        products.CheckAlert().should('be.visible').contains('Thank you! Your order will be delivered in next few weeks')
        products.ClossAlert().click()
            

        
      
    })
})