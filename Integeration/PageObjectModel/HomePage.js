class HomePage{
    
    getEditBox()
    {
        return cy.get(":nth-child(1) > .form-control")
    }

    getTwoWayDataBinding()
    {
        return cy.get(":nth-child(4) > .ng-untouched")
    }

    getGender()
    {
        return cy.get('select')
    }

    getEntrepreneourButton()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;