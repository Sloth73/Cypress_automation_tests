///<reference types = "cypress"/>

describe("Verify checkboxes via webdriveruni", () => {
  it("Check and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    //   cy.get("#checkboxes > :nth-child(1) > input").check();
    //   cy.get("#checkboxes > :nth-child(1) > input").check().should('be.checked');
      cy.get("#checkboxes > :nth-child(1) > input").as('option01')
          cy.get('@option01').check().should('be.checked');
  });
    it("Uncheck and validate checkbox", () => {
      cy.visit("http://www.webdriveruniversity.com");
      cy.get("#dropdown-checkboxes-radiobuttons")
        .invoke("removeAttr", "target")
          .click({ force: true });
        cy.get(":nth-child(5) > input").uncheck().should('not.be.checked');
    });
});
