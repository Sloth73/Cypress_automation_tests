///<reference types = "cypress"/>

describe("Interact with dropdown list via webdriveruni", () => {
  it("Select specific values via seleckt dropdown lists", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
      cy.get('#dropdowm-menu-1').select('c#')
      cy.get("#dropdowm-menu-2").select('testng');
      cy.get("#dropdowm-menu-3").select('jquery');
  });

});
