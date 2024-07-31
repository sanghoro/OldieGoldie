describe('should be able to checkout', () => {
  beforeEach(()=> {
    cy.fixture('example').then((products)=> {
      cy.intercept('GET', 'https://fakestoreapi.com/products', {
        statusCode:200,
        body:products,
      }).as('getProducts')
    })
    cy.visit('http://localhost:3000')
  })

  it('should be able add to shopping bag and checkout', ()=> {
    cy.get('#search > img').click()
    cy.url().should('eq', 'http://localhost:3000/search')
    cy.get('.Searchbar').type('jacket')
    cy.get('.add-to-bag-button').click()
    cy.on('window:alert', (str)=> {
      expect(str).to.equal('Item added to shopping')
    })
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('.bag-item').should('have.length', 1)
    cy.get('.checkout-button').click()
    cy.get('.receipt').contains('Total: $59.49')
  })

  it('should be able remove from shopping bag', ()=> {
    cy.get('#search > img').click()
    cy.url().should('eq', 'http://localhost:3000/search')
    cy.get('.Searchbar').type('jacket')
    cy.get('.add-to-bag-button').click()
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('.bag-item').should('have.length', 1)
    cy.get('.bag-remove-button').click()
    cy.get('p').contains('Your bag is empty')
  })

  it('should say "your bag is empty" if there is no items in the shopping bag', () => {
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('p').contains('Your bag is empty')
  })

})