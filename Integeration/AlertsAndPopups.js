describe('Alerts and pop up handling', function(){

    it('Handling Alerts',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // window alerts
        cy.on('window:alert', (str)=>
        {
           expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })
// window confirm event
        cy.on('window:confirm', (str)=>
        {
           expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('contains', 'rahulshettyacademy')

       cy.go('back')

    })
})