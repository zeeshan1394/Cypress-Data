
describe('handle child window within same domain', function(){

    it ('Method 02 for handling child window', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(e1){
// This will not work here because we are changing our domain but it does work for same doimain.
// under href we will getting link of other domain like www.QA.testing.come some thing like it but at the top its domain
// is rahulshetty so we can use both methods like invoke(removeAttr, value) 
            const url = e1.prop('href')
            cy.visit(url)
        })
    })
})