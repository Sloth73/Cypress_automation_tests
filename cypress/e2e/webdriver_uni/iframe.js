///<reference types = "cypress"/>

describe("Handeling iframe and modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#iframe").invoke("removeAttr", "target").click({ force: true }); 

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        })
        cy.get('@iframe').find('#button-find-out-more').click() //we can use click, because its wrapped 
        cy.get("@iframe").find("#myModal").as('modal');
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to');
        })
        cy.get('@modal').contains('Close').click()
    })
})