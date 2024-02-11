///<reference types = "cypress"/>

describe("Verify checkboxes via webdriveruni", () => {
  it("HCheck and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
cy.get("#checkboxes > :nth-child(1) > input").check();
  });
});
