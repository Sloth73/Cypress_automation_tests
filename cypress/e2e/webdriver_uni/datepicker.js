///<reference types = "cypress"/>

describe("Test datepicker via webdriveruni", () => {
  it("Select date from datepicker", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    let date = new Date();
    date.setDate(date.getDate()); //get current date
    cy.log(date.getDate());

    let date1 = new Date();
    date1.setDate(date.getDate() + 5); //get current date + 5
    cy.log(date1.getDate());
  });
});
