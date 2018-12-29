describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1001');
  });

  it('Should render app on homepage', () => {
    cy.contains('Loading...').should('exist');
  });
});