/// <reference types="cypress" />

describe("openning calculator page and verifying the fetures", () => {
  beforeEach(() => {
    cy.visit("/", { retryOnNetworkFailure: true });
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Verify the url", () => {
    cy.url().should("include", "/qainterview.pythonanywhere.com");
  });

  it("Verify the title", () => {
    cy.title().should("include", "Factoriall");
  });

  it("Verify the header", () => {
    cy.get(".col-md-6 > .margin-base-vertical")
      .invoke("text")
      .then((calc) => {
        expect(calc).equal("The greatest factorial calculator!");
      });
  });

  it("Verify the placeholder in the text box", () => {
    cy.get("#number")
      .invoke("attr", "placeholder")
      .then((placeHolderText) => {
        expect(placeHolderText).equal("Enter an integer");
      });
  });

  it("Verify calculate button and and its text", () => {
    cy.get("#getFactorial")
      .should("not.be.disabled")
      .invoke("text")
      .then((buttonText) => {
        expect(buttonText).equal("Calculate!");
      });
  });

  //// "Terms and Conditions" link test scripts are in the `factorialCalculator_Bugs.cy.js` spec file
  //// "Privacy" link test scripts are in the `factorialCalculator_Bugs.cy.js` spec file

  it("Verify Qxf2 Services is displayed", () => {
    cy.get(".row-fluid > :nth-child(2)").should("be.visible");
  });

  it("Verify Qxf2 Services navigates to the correct url", () => {
    cy.get(".row-fluid > :nth-child(2)").click();
    cy.url().should(
      "include",
      "/qxf2.com/?utm_source=qa-interview&utm_medium=click&utm_campaign=From%20QA%20Interview"
    );
  });
});
