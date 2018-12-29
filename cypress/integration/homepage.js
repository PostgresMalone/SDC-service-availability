describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1001');
  });

  it('On visiting site, should display a loading bar', () => {
    cy.contains('Loading...').should('exist');
  });

  it('Should have a request to book button', () => {
    cy.get('.button-modal').should('exist');
  });

  it('Should show modal when clicking on "Request to Book" button', () => {
    cy.get('.button-modal')
      .click();
    cy.contains('Dates').should('exist');
  });

  it('Should show calendar when clicking on "Check-in" input', () => {
    cy.get('.button-modal')
      .click();
    cy.get('.check-in')
      .click()
    cy.get('.calendar').should('exist');
  });

  it('Should show calendar when clicking on "Check-out" input', () => {
    cy.get('.button-modal')
      .click();
    cy.get('.check-out')
      .click()
    cy.get('.calendar').should('exist');
  });
});