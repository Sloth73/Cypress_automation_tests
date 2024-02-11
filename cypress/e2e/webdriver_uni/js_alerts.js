///<reference types = "cypress"/>

describe("Handle js alerts", () => {
    it("Confirm js alerts contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }); 

    });
});