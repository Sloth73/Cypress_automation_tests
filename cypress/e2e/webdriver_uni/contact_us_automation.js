///<reference types = "cypress"/>

describe("Test contact Us form via WebdriverUni", () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            // this.data = data;
            globalThis.data = data;
        })
    })
  it("Should be able to submit a succesfull submission via contact us form", () => {
    // cy.visit("http://www.webdriveruniversity.com")
    // cy.get("#contact-us > .thumbnail").click();
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }); //Cypress doesn't support multi-tabs. This jQuery command removes attribute that calls the second "blank" page and shows desired content in original tab
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci."
    );
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a succesfull submission via contact us form as all fields are required", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get("textarea.feedback-input").type(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci."
    );
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
