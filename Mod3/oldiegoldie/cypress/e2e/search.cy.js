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

  it('should be able to search for an item and successfully add to bag', ()=> {
    cy.get('#search > img').click()
    cy.url().should('eq', 'http://localhost:3000/search')
    cy.get('.Searchbar').type('jacket')
    cy.get('.add-to-bag-button').click()
    cy.on('window:alert', (str)=> {
      expect(str).to.equal('Item added to shopping')
    })
    cy.get('[href="/shopping-bag"] > img').click()
    cy.get('.bag-item').should('have.length', 1)
  })

  it('should say "no items with that name" when you type in something that does not exist', () => {
    cy.get('#search > img').click()
    cy.url().should('eq', 'http://localhost:3000/search')
    cy.get('.Searchbar').type('aaaaa')
    cy.get('.search-results').contains('No items with that name')
  })
})