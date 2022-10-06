/// <reference types="cypress" />

describe("openning calculator page and verifying the fetures", () => {
  beforeEach(() => {
    cy.visit("/", { retryOnNetworkFailure: true });
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Click on `Calculate!` button with no value and verify the error message ", () => {
    cy.get("#getFactorial").click();
    cy.get("#resultDiv")
      .invoke("text")
      .then((resultError) => {
        expect(resultError).equal("Please enter an integer");
      });
  });

  it("Click on `Calculate!` button with a string value and verify the error message ", () => {
    cy.get("#number").type("abcd");
    cy.get("#getFactorial").click();
    cy.get("#resultDiv")
      .invoke("text")
      .then((resultError) => {
        expect(resultError).equal("Please enter an integer");
      });
  });

  it("Click on `Calculate!` button with special characters and verify the error message ", () => {
    cy.get("#number").type("!@#$%");
    cy.get("#getFactorial").click();
    cy.get("#resultDiv")
      .invoke("text")
      .then((resultError) => {
        expect(resultError).equal("Please enter an integer");
      });
  });
});
