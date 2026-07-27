describe('Transfers', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.loginWithValidData()
    })

    it('Should perform the transfer when valid data and amount are entered', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('João').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Maria').click()

        cy.get('#valor').click().type('11')

        cy.contains('button', 'Transferir').click()

        cy.checkToastMessage('Transferência realizada!')
    })
})