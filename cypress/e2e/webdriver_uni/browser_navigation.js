///<reference types = "cypress"/>

describe("Validate WebdriverUni homepage links", () => {
  it("Confirm lins redirect to be the correct pages", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }); //Cypress doesn't support multi-tabs. This jQuery command removes attribute that calls the second "blank" page and shows desired content in original tab
    cy.url().should("include", "contactus");
    cy.go("back"); //cy.go enables us to perform navigation actions
    cy.reload();
    //cy.reload('true') - reload without using cache
    cy.go("forward");
    cy.url().should("include", "contactus");
    cy.go("back");
      cy.get("#login-portal").invoke("removeAttr", "target").click({ force: true });
      cy.url().should("include", "Login-Portal");
      cy.go('back');
      cy.url().should("include", "http://www.webdriveruniversity.com/");
      cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
  });
});
