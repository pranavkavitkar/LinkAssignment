class fileUpload {
  elements = {

    choose_file: () => cy.get('#file-upload'),
    success_headder: () => cy.get('h3'),
    uploaded_file_box: () => cy.get('#uploaded-files'),
    submit_btn: () => cy.get('#file-submit'),
    drag_drop_area: () => cy.get('#drag-drop-upload'),
    success_mark_dragNdrop: () => cy.get('#drag-drop-upload > .dz-preview > .dz-success-mark')
  }

  attachFile(filename = 'example.json') {
    this.elements.choose_file().attachFile(filename)
  }
  click_submit(){
    this.elements.submit_btn().click()
  }
  attachFile_dragDrop(filename = 'example.json') {
    this.elements.drag_drop_area().attachFile(filename, { subjectType: 'drag-n-drop' }).contains(filename).should('be.visible')
    this.elements.success_mark_dragNdrop().should('be.visible')
  }

}
module.exports = new fileUpload();


