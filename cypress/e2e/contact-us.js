/// <reference types = "Cypress" />

describe("Test contact Us form via WebdriverUni", () => {
    it("Should be able to submit a succesfull submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#contact-us > .thumbnail").click();
  });

  it("Should not be able to submit a succesfull submission via contact us form as all fields are required", () => {});
});
