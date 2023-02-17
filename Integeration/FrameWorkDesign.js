describe ('Test suit, Frame work design in cypress', function(){

    before(function(){
        cy.fixture('example').then(function(data){

            this.data=data
        })
    })


    it ('Frame work design begining', function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(":nth-child(1) > .form-control").type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(":nth-child(4) > .ng-untouched").should('have.value',this.data.name)
        cy.get(":nth-child(1) > .form-control").should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get(':nth-child(2) > .nav-link').click()
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