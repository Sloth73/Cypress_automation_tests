///<reference types = "cypress"/>

describe("Iterating over elements", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    });
  });