class iFrame {
  elememnts = {

    iframe_text: () => cy.getIframe('#mce_0_ifr'),
  }

  typeInFrame(text) {
    this.elememnts.iframe_text().clear().type(text)
  }
}
module.exports = new iFrame();


