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
    it("Validate js confirm alert box works correctly when clicking ok", () => {
      cy.visit("http://www.webdriveruniversity.com");
      cy.get("#popup-alerts")
        .invoke("removeAttr", "target")
        .click({ force: true });
      cy.get("#button4").click();
        cy.on('window:alert', (str) => { 
            return true;
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      
    });
    it("Validate js confirm alert box works correctly when clicking cancel", () => {
      cy.visit("http://www.webdriveruniversity.com");
      cy.get("#popup-alerts")
        .invoke("removeAttr", "target")
        .click({ force: true });
      cy.get("#button4").click();
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get("#confirm-alert-text").contains("You pressed Cancel!");
    });
});
