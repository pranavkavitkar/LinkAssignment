describe('Basic Auth Tests', () => {
  beforeEach(() => {
    cy.fixture('cred.json').as('userData')
    cy.fixture('multipleCred.json').as('userData1')

  });

  it('should log in with fixture data', function () {
    const { username, password } = this.userData
    cy.visit('https://' + username + ':' + password + '@the-internet.herokuapp.com/basic_auth')
    cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');
  });

  it('should log in with multiple credentials', function () {
    // Iterate through each set of credentials and log in
    this.userData1.forEach(({ username, password, flag }) => {
      cy.visit('https://' + username + ':' + password + '@the-internet.herokuapp.com/basic_auth', { failOnStatusCode: false })

      if (flag == '1') {
        cy.contains('Not authorized').should('be.visible')
      }
      else {
        cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');

      }
    });
  });


})