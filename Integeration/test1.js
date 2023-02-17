describe('My first test suite', function() {

    it('My first test', function() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type = "search"]').type('ca')

        cy.wait(4000)
           
        cy.get('.product:visible').should('have.length', 4)
        
        //parent child cheaning
        //select parent product,then select child product having index 2 and click on add to cart button
        // Following method is used to select product by index

        // In order to optomise code we use alliasing for this we will create one varibale as:

        cy.get('.products').as('productLocator')
       // cy.get('.products').as('productCLocator')
   
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()   

        // using dynamic concept 

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
           
        const VarVeg=$el.find('h4.product-name').text()
     
        if(VarVeg.includes('Cashews'))

        {  
         $el.find('button').click()
        }

        }) 
        //using assertions for verifying the logo text

        cy.get('.brand').should('have.text', 'GREENKART')
        
        // to print logo text and using then function for logo text print
        //second method
        cy.get('.brand').then(function(greenlogo){
            cy.log(greenlogo.text())
        })
    } )
} )