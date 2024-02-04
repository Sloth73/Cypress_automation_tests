///<reference types = "cypress"/>

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path']").contains("Hair Care").click();
      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail'); // Something like creating variable, that stores informations
      cy.get('@productThumbnail').its('length').should('be.gt', 5); // When reffering to an alias, always use @
      cy.get("@productThumbnail").should('include', 'Seaweed Conditioner');
    });
  });