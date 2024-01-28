/// <reference types = "Cypress" />

describe("Test contact Us form via Automation Test Store", () => {
  it("Should be able to submit a succesfull submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("john.doe@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci."
    );
    cy.get(".col-md-6 > .btn").click();
  });
});
