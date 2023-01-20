import HomePage from "./PageObjectModel/HomePage"

describe ('Test suit, Frame work design in cypress', function(){

    before(function(){

        cy.fixture('example').then(function(data)
        {
           this.data=data
        })
        
    })

     it ('Frame work design begining', function(){

       const homepage = new HomePage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homepage.getEditBox().type(this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWayDataBinding().should('have.value',this.data.name)
        homepage.getTwoWayDataBinding().should('have.attr','minlength','2')
        homepage.getEntrepreneourButton().should('be.disabled')

        homepage.getShopTab().click()
        cy.url().should('includes', 'shop')

        //for below function we have created one customize function in support-commands.js and we are just calling this function for our ease.
        //Method one
       // cy.SelectProduct('Blackberry')
        //cy.SelectProduct('Nokia Edge')   

        //now to select multiple products using array
        // 1. create data in fixture
        // 2. access it using this.data.productName
        // 3. then use array to access each element of an array
         
        var productArray = this.data.productsName
        productArray.forEach(element =>{
    
            cy.SelectProduct(element)
        });

        //for debug we use a method cy.pause() or cy.debug()

    

        
    })
})