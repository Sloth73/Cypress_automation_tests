
describe("Test contact Us form via WebdriverUni", () => {
    it("Should be able to submit a succesfull submission via contact us form", () => {
        // cy.visit("http://www.webdriveruniversity.com")
         // cy.get("#contact-us > .thumbnail").click();
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("John");
        cy.get('[name="last_name"]').type("Doe");
        cy.get('[name="email"]').type("john.doe@gmail.com");
        cy.get("textarea.feedback-input").type(
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci."
        );
        cy.get('[type="submit"]').click();

  });

    it("Should not be able to submit a succesfull submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("John");
        cy.get('[name="email"]').type("john.doe@gmail.com");
        cy.get("textarea.feedback-input").type(
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci."
        );
        cy.get('[type="submit"]').click();
  });
});