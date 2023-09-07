
it.skip('Download File', ()=>{
  cy.visit('/download')
  cy.get("a[href='download/API.txt']", { timeout: 0 }).click({force:true})
  // this is getting failed as Cypress is waiting for the page to load, which is not happening
  cy.readFile('cypress/downloads/API.txt').should('exist')
  cy.wait(5000)
})
