// describe('Handle web tables', function(){

//     it ('Handle a web table using scanning column concept', function(){

//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

//             const text = $el.text()

//             if(text.includes("python"))

//             {
//             cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

//             const Pricetext = price.text()

//             expect(Pricetext).to.equal('25')
//         })
            
//             }
//         })
//     })
// })

/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
        // as text is not a cypress method so we have to resolve the promise by using then method
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) 
        {
         const priceText = price.text()
         expect(priceText).to.equal('25')
        })
    }
 
})
 
 
})
 
 
})
