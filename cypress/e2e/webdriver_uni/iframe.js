///<reference types = "cypress"/>

describe("Handeling iframe and modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }); 
  
    })
})