describe('user can get a greeting when clicking a button', () => {
	it('user can reach site', () => {
        cy.visit('http://localhost:3001')
        cy.get('#quote').click()
    })
    it('user can click button', () => {
        cy.get('#quote').click()
    })
    it('displays a greeting when clicking button', () => {
        cy.get('#quote').should('contain', 'Press me')
    })
})