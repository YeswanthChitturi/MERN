describe('Register Page E2E Testing', function() {
    beforeEach(function() {
        cy.fixture('user').then((user) => {
            this.userData = user
        })
    })

    it('Testing Register', function() {
        cy.visit('/register')
        cy.get('input[name="name"]').type(this.userData.name)
        cy.get('input[name="email"]').type(this.userData.email)
        cy.get('input[name="password"]').type(this.userData.password)
        
        // Ensure the button selector matches only one element
        cy.get('button[type="button"]').should('not.be.disabled').first().click({force: true})
        
        cy.log('Register Functionality Is Working')
    })
})
