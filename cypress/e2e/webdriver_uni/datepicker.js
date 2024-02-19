///<reference types = "cypress"/>

describe("Test datepicker via webdriveruni", () => {
  it("Select date from datepicker", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

  });
});
