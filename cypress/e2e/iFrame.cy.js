import iFrame from "./pages/iFrame"

it('Input text in the text editor which is inside an iframe', () => {
  cy.visit('/iframe')
  iFrame.typeInFrame(' This is a text in i Frame for LINK {selectall}')
  // Make bold 
  cy.get("[aria-label='Bold']").click();
  cy.wait(5000)

})