import fileUpload from "./pages/fileUpload";

beforeEach(() => {
  cy.visit('/upload');
});

it('Upload file check', () => {
  let fileName = 'example.json'
  fileUpload.elements.success_headder().should('have.text', 'File Uploader')
  fileUpload.attachFile(fileName)
  fileUpload.click_submit()
  fileUpload.elements.success_headder().should('have.text', 'File Uploaded!')
  fileUpload.elements.uploaded_file_box().should('include.text', fileName)
});

it('Drag and drop file upload check', () => {
  let fileName = 'example.json'
  fileUpload.attachFile_dragDrop(fileName)
  
});

