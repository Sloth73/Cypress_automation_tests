///<reference types = "cypress"/>

describe("Handle js alerts", () => {
  it("Confirm js alerts contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true });
      cy.get("#button1").click();
      cy.on('window:alert', (str) => {
          expect(str).to.eq('I am an alert box!')
      })
  });
});
