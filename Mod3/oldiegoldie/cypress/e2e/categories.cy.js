describe('should be able to navigate and add to my shopping bag', () => {
  beforeEach(()=> {
    cy.fixture('example').then((products)=> {
      cy.intercept('GET', 'https://fakestoreapi.com/products', {
        statusCode:200,
        body:products,
      }).as('getProducts')
    })
    cy.visit('http://localhost:3000')
  })

  
    it('should be able to navigate to all items category and add to shopping bag', () => {
      cy.get('.homepage-title > a').click()
      cy.url().should('eq', 'http://localhost:3000/all-items')
      cy.get(':nth-child(1) > .add-to-bag-button').click()
      cy.get('[href="/shopping-bag"] > img').click()
      cy.get('.bag-item').should('have.length', 1);
    })  

  it('should be able to navigate to womens category and add to shopping bag', () => {
    cy.get('[href="/womens-fashion"] > .section-title > h2').click()
    cy.url().should('eq', 'http://localhost:3000/womens-fashion')
    cy.get(':nth-child(1) > .add-to-bag-button').click()
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('.bag-item').should('have.length', 1);
  })

  it('should be able to navigate to mens category and add to shopping bag', () => {
    cy.get('[href="/womens-fashion"] > .section-title > h2').click()
    cy.url().should('eq', 'http://localhost:3000/womens-fashion')
    cy.get(':nth-child(1) > .add-to-bag-button').click()
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('.bag-item').should('have.length', 1);
  })

  it('should be able to navigate to jewelry category and add to shopping bag', () => {
    cy.get('[href="/jewelry"] > .section-title > h2').click()
    cy.url().should('eq', 'http://localhost:3000/jewelry')
    cy.get(':nth-child(1) > .add-to-bag-button').click()
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('.bag-item').should('have.length', 1);
  })

  it('should be able to navigate to electronics category and add to shopping bag', () => {
    cy.get('[href="/electronics"] > .section-title > h2').click()
    cy.url().should('eq', 'http://localhost:3000/electronics')
    cy.get(':nth-child(1) > .add-to-bag-button').click()
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('.bag-item').should('have.length', 1);
  })
})