describe('Login', () => {
  it('Login with valid data', () => {
    cy.visit('http://localhost:4000')

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Login with invalid data', () => {
    cy.visit('http://localhost:4000')

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('12345678')
    cy.contains('button', 'Entrar').click()

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})