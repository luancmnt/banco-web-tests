describe('Login', () => {
beforeEach(() => {
  //Arrange
  cy.visit('/')
})

  it('Login with valid data', () => {
    //Act
    cy.loginWithValidData()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Login with invalid data', () => {
    //Act
    cy.loginWithInvalidData()

    //Assert
    cy.checkToastMessage('Erro no login. Tente novamente.')
  })
})