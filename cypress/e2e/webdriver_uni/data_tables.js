/// <reference types="Cypress" />

describe("Handeling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
    it("Calculate and assert the age of all users", () => {
        const userDetails = [];
        let number = 0;
      cy.get('#thumbnail-1 td').each(($el, i, $list) => {
          userDetails[i] = $el.text();
      }).then(() => {
          let i;
          for (i = 0; i < userDetails.length; i++) {
              //   cy.log(userDetails[i]);
              if (Number(userDetails[i])) {
                  number += Number(userDetails[i])
              }
          }
          cy.log(number)
          expect(number).to.eq(322);
})
  });
});
