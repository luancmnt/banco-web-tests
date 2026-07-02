describe('Transfers', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
        cy.contains('button', 'Entrar').click()
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

        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})