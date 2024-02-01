///<reference types = "cypress"/>

const clearCredentialsByURI = require("npm/lib/config/clear-credentials-by-uri");

describe("Vrifying variables, Cypress command and jQuery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/')

        // This approach will work, but not recommended
        // const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup');
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path']").contains("Skincare");
        // skincareLink.click();
        // -> need to pay attention to order od execution!

        // This approach will fail because the order of execution
        // const makeupLink = cy.get("a[href*='product/category&path']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();

        // Recommeded approach
        cy.get("a[href*='product/category&path']").contains("Makeup").click();
        cy.get("a[href*='product/category&path']").contains("Skincare").click();
    });
    it("Navigating to specific product pages", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path']").contains("Makeup").click();
        cy.get('h1 .maintext').then((headerText) => {
            const text = headerText.text();  /* headerText parameter becomes result of cy.get */
            cy.log(text)
            expect(text).is.eq('Makeup');
      })  

    });
});