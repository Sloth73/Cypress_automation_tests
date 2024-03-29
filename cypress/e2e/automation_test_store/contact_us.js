///<reference types = "cypress"/>

describe("Test contact Us form via Automation Test Store", () => {
  it("Should be able to submit a succesfull submission via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact']").click().then(function (buttonText) {
      console.log /* cy.log */ ('Just clicked on ' + buttonText.text())
    });
    // $ means ends with
    // .then returns promise just as in JS -> after then - JS code, not Cypress code.
    // Function parameter becomes first selcted element(with cy.get).
    // Text() is jQuery command - transfering element to text.
    // If console.log is written alone - becomes executed before the test starts

    // cy.xpath("a[contains(@href, 'contact')]"); - xpath
    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("john.doe@gmail.com");
    cy.get("#ContactUsFrm_email").should('have.attr', 'name', 'email');  
    cy.get("#ContactUsFrm_enquiry").type(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci."
    );
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );  

  });
});
