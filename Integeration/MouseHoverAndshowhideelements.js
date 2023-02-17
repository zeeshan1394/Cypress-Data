describe('Mouser hovering to show and select hide elements', function(){

    it ('Hovering a mouse', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Method # 01
        // If you have a test case like to first hover a mouse and show labels and then select one of them.
        //Uncomment the following line
      //  cy.get('div.mouse-hover-content').invoke('show')  
        cy.wait(5000)

        //Method #02
        // we can also click on hidden element withour showing it
        // and it could be only possible by passing force:true to click function
        cy.contains('Top').click({force : true})

        cy.url().should('include','top')

    })
})