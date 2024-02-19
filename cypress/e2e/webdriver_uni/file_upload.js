///<reference types = "cypress"/>

describe('Test file upload via webdriver uni', () => {
    it('Uploading file', () => {
      cy.visit("http://www.webdriveruniversity.com");
      cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });   
    });
});