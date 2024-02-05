///<reference types = "cypress"/>

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail"); // Something like creating variable, that stores informations
    cy.get("@productThumbnail").its("length").should("be.gt", 5); // When reffering to an alias, always use @
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });
  it("Validate a number of product in specific div element", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("eq", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("contain", "Add to Cart");
  });
  it.only("Calculate total or normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail").find('.oneprice').each(($el, index, $list) => {
    //   cy.log($el.text())
    // });
      cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
      cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
      let itemPriceTotal = 0
      cy.get('@itemPrice').then($linkText => {
          let itemPrice = $linkText.split('$');
        //   cy.log(itemPrice)
          let priceSum = 0;
          let i;
          for (i = 0; i < itemPrice.length; i++) {
            //   cy.log(itemPrice[i]);
              priceSum += Number(itemPrice[i]);
            }
            // cy.log(priceSum)
          itemPriceTotal += priceSum
        //   cy.log(itemPriceTotal)
      })
      cy.get('@saleItemPrice').then($linkText2 => {
          let saleItemPrice = $linkText2.split('$');
          let salePriceSum = 0;
          let index;
          for (index = 0; index < saleItemPrice.length; index++) {
              salePriceSum += Number(saleItemPrice[index]);
          }
        //   cy.log(salePriceSum)
          itemPriceTotal += salePriceSum
          cy.log(itemPriceTotal)
      }).then(() => {
          cy.log('Total price of all items on the page is: ' + itemPriceTotal + '$');
          expect(itemPriceTotal).to.eq(660.5);
      })
  });
});
