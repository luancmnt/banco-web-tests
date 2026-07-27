Cypress.Commands.add('checkToastMessage', message => {
    cy.get('.toast').should('have.text', message)
})