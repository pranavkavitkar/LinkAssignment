class checkbox {
  elememnts = {

    dropdownList: () => cy.get('select')
  }

  selectValue(value) {
    this.elememnts.dropdownList().select(value).should('have.value', value);
  }
}
module.exports = new checkbox();


