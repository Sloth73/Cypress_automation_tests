///<reference types = "cypress"/>

describe("Verify radiobuttons via webdriveruni", () => {
  it("Check specific radiobuttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
        .click({ force: true });
      cy.get('#radio-buttons').find("[type='radio']").first().check();
      cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });
});
