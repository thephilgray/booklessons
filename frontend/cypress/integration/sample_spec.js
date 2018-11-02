describe('Initial test', function() {
  it('should visit the home page', () => {
    cy.visit(`http://localhost:7777`);
    cy.contains('Book');
  });

  it('should have a link to `/teach`', () => {
    cy.visit(`http://localhost:7777`);
    cy.contains('Teach').click();
    cy.url().should('include', '/teach');
  });
});
