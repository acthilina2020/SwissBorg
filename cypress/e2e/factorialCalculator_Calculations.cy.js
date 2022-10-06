/// <reference types="cypress" />

describe("openning calculator page and verifying the fetures", () => {
  beforeEach(() => {
    cy.visit("/", { retryOnNetworkFailure: true });
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it.only("Verify factorial for numbers in range 10-100", () => {
    const maxNumber = 100;

    for (let i = 10; i <= maxNumber; i += 1) {
      cy.get("#number").type(i);
      cy.get("#getFactorial").click();
      cy.wait(500);
      cy.get('p[id="resultDiv"][class="text-center top-space-20"]')
        .invoke("text")
        .then((result) => {
          const myArray = result.split(": ");
          const resultNumber = Number(myArray[1]);
          cy.log(resultNumber);

          const factorialOf = (integer) => {
            let factorial = 1;
            for (let i = 1; i <= integer; i++) {
              factorial *= i;
            }
            return factorial;
          };
          cy.log(factorialOf(i));

          expect(resultNumber).to.equal(factorialOf(i));
          cy.get("#number").clear();
        });
    }
  });
});

//// Above test engine automatically takes numbers starting from 10 and verify the factorial returned by the website until it reach 100.
//// The factorial from the website is compared with factorial calculated by Javascript.
//// Factorial returned for some numbers (EX; 28 and several other numbers) from the website are slightly different from the factorial we get from Javascript calculator.
//// It really comes down to the precision of the result we receive from the website `https://qainterview.pythonanywhere.com/` vs the javascript calculation
