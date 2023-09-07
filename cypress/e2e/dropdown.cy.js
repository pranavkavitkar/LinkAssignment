import dropdown from "./pages/dropdown";  

it('Select and verify dropdowns', () => {
  cy.visit('/dropdown')
  dropdown.selectValue('1')
  dropdown.selectValue('2') 
});
