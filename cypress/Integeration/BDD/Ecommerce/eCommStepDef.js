import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import ProductSelection from "../../PageObjectModel/ProductSelection";
import HomePage from "../../PageObjectModel/HomePage";


const products = new ProductSelection();
const homepage = new HomePage();

let name;

Given('I open Ecommerce Application page',()=>{

    cy.visit(Cypress.env('url') + "/angularpractice/")
})

// When I add item to the cart

When('I add item to the cart',function(){

   
        products.SelectProduct().click()

        var productArray = this.data.productsName
        productArray.forEach(element =>{
    
            cy.SelectProduct(element)
           
        })

        products.CheckOutHome().click()
})

// And Validate the total price

When('Validate the total price',()=>{

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
})

//Then select the country submitt and verify thanyou

Then('select the country submitt and verify thanyou', ()=>{

    products.CheckOut().click()
    products.SearchCountry().type('Pakistan')
    products.SelectCountry().click()
    products.SelectCheckBox().click({force:true})
    products.ClickPurchaseButton().click()
    products.CheckAlert().should('be.visible').contains('Thank you! Your order will be delivered in next few weeks')
    products.ClossAlert().click()
})

When('I fill the form details',function(dataTable){
    name = dataTable.rawTable[1][0]
    homepage.getEditBox().type(dataTable.rawTable[1][0])     //so rawtable will convert your data to an array/matrix
    homepage.getGender().select(dataTable.rawTable[1][1])

})

Then('Validate the form baheviour',function(dataTable){

    homepage.getTwoWayDataBinding().should('have.value',name)
   // homepage.getTwoWayDataBinding().should('have.attr','minlength','2')
    homepage.getEntrepreneourButton().should('be.disabled')

})

Then('Select the shop page',()=>{

    homepage.getShopTab().click()
    cy.url().should('includes', 'shop')

})