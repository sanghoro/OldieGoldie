describe('should be able to see and navigate the page', () => {
  beforeEach(()=> {
    cy.fixture('example').then((products)=> {
      cy.intercept('GET', 'https://fakestoreapi.com/products', {
        statusCode:200,
        body:products,
      }).as('getProducts')
    })
    cy.visit('http://localhost:3000')
  })

  it('should display navbar, main video, and a section that displays each categories', ()=> {
    cy.get('nav').should('exist')
    cy.get('#backgroundVideo').should('be.visible')
    cy.get('.sections').should('exist')
  })

  it('navbar should have a logo and functioning links', () => {
    cy.get('nav').should('exist');
    cy.get('.logo-link img').should('be.visible')
    cy.get('.nav-link').should('have.length', 4);
  })

  it('should navigate to home page when the logo and home button is clicked', () => {
    cy.get('.nav-home > .nav-link > img').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.logo-link > img').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should navigate to all items page when the shop button is clicked', () => {
    cy.get('#all-products > img').click()
    cy.url().should('eq', 'http://localhost:3000/all-items')
  })

  it('should navigate to all items page when the shop button is clicked', () => {
    cy.get('#search > img').click()
    cy.url().should('eq', 'http://localhost:3000/search')
  })

  it('should navigate to all items page when the shop button is clicked', () => {
    cy.get('[href="/shopping-bag"] > img').click()
    cy.url().should('eq', 'http://localhost:3000/shopping-bag')
  })

})


