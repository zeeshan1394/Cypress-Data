class ProductSelection {

    SelectProduct()
    {
      return cy.get(':nth-child(2) > .nav-link')
    }
    CheckOutHome()
    {
      return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    CheckOut()
    {
      return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
    SearchCountry()
    {
      return cy.get('#country')
    }
    SelectCountry()
    {
      return cy.get('.suggestions > ul > li > a')
    }
    SelectCheckBox()
    {
      return  cy.get('div.checkbox')
    }
    ClickPurchaseButton()
    {
      return cy.get('.ng-untouched > .btn')
    }
    CheckAlert()
    {
      return cy.get('.alert')
    }
    ClossAlert()
    {
      return cy.get('.close')
    }

}

export default ProductSelection;