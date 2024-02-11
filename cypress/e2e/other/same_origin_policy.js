///<reference types = "cypress"/>

describe("Cypress web security", () => {
  it.skip("Validate visiting two different domains", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
    // This code will fail due to security mesures, can't visit two different superdomains in the same test
  });

  it("Validate visiting two different domains via user action", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
    // This code will also fail due to same resons, but if we disable chrome web security - cypress-config.js -> chromeWebSecurity : false - this code will execute
  });
  it("Origin command", () => {
    cy.origin("http://www.webdriveruniversity.com", () => {
      cy.visit("/");
    });
    cy.origin("https://www.automationteststore.com", () => {
      cy.visit("/");
    });
  });
});
