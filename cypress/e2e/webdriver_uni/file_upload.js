///<reference types = "cypress"/>

describe('Test file upload via webdriver uni', () => {
    it('Uploading file', () => {
      cy.visit("http://www.webdriveruniversity.com");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });  
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');
        cy.get('#submit-button').click();
    });
});