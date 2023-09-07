import checkbox from "./pages/checkbox";

it('Validate check boxes', () => {
  cy.visit('/checkboxes')
  // Assert default check status
  checkbox.elememnts.checkbox1().should('not.be.checked')
  checkbox.elememnts.checkbox2().should('be.checked')

  // Check and uncheck both boxes
  checkbox.check_checkBox1()
  cy.wait(5000) // added to see changes
  checkbox.un_check_checkBox2()
  cy.wait(5000) // added to see changes
    
});