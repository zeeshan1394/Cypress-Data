describe('Check box Automation', function(){

    it('checking a check box', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').as('checkboxlocator')

        //To check a specific checkbox and then use some assertions in order to verify it
        cy.get('@checkboxlocator').check().should('be.checked').and('have.value','option1')
        cy.wait(4000)

        //To uncheck a checkbox
        cy.get('@checkboxlocator').uncheck().should('not.be.checked')
        cy.wait(5000)

        //select check boxes among the others checkboxes and then uncheck it
        cy.get('input[type = "checkbox"]').check(['option1','option3']).wait(4000).uncheck(['option1','option3'])
        
        //Select static dropdown/ Radio buttons
        cy.get('select').select('option2').should('have.value', 'option2')

        //select dynamic dropdowns/ Radio buttons

        cy.get('#autocomplete').type('Ind')
        
        //For parent child combination we create a css select as (parentclass space child class as below)

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()===('India'))
        {
           $el.click()
        }
        })

        cy.get('#autocomplete').should('have.value', 'India')
        
        //show and hide text assertions
        cy.get('#show-textbox').should('be.visible')
        cy.get('#hide-textbox').click().wait(5000)
        cy.get('#show-textbox').should('be.visible').wait(5000)
        cy.get('#show-textbox').click().should('be.visible')




    })
})