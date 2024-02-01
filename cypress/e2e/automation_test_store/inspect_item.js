///<reference types = "cypress"/>

describe("Inspect Automation test store items using chain commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click(); //(Very likely to break in the future due to possible changes in class, position, etc.)
  });
  it("Click on the first item using item text", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });
  it("Click on the first item using item index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0);
  });
});
