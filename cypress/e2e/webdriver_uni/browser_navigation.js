///<reference types = "cypress"/>

describe("Validate WebdriverUni homepage links", () => {
  it("Confirm lins redirect to be the correct pages", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }); //Cypress doesn't support multi-tabs. This jQuery command removes attribute that calls the second "blank" page and shows desired content in original tab
    cy.url().should("include", "contuctus");
    cy.go("back"); //cy.go enables us to perform navigation actions
  });
});
