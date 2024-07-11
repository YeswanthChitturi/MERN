//this is where we will write e2e test
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/');// visit is used to visit a url

        cy.contains('Welcome');
        // if a text   is present in the documment or not
        cy.contains('Hiiii');
    })
})