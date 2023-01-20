describe('My first test suite', function() {

    it('My first test', function() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type = "search"]').type('ca')

        cy.wait(4000)
           
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
        cy.get('.cart-icon').click()
        
        cy.contains('PROCEED TO CHECKOUT').click()

        cy.contains('Place Order').click()
    })
})