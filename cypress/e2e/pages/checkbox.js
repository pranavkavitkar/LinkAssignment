class checkbox {
  elememnts = {
    checkbox1 :() => cy.get('#checkboxes > input:first-of-type'),
    checkbox2 :() => cy.get('#checkboxes > input:nth-of-type(2)')
  }

  check_checkBox1() {
    this.elememnts.checkbox1().check()
  }
  check_checkBox2() {
    this.elememnts.checkbox2().check()
  }

  un_check_checkBox1() {
    this.elememnts.checkbox1().uncheck()
  }
  un_check_checkBox2() {
    this.elememnts.checkbox2().uncheck()
  }
}
module.exports = new checkbox();


