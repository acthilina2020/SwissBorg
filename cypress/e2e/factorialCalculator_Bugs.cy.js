/// <reference types="cypress" />

describe("openning calculator page and verifying the fetures", () => {
    beforeEach(() => {
      cy.visit("/", { retryOnNetworkFailure: true });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  
  //Terms and Conditions
    it("Verify Terms and Conditions link text", () => {
      cy.get("body > div.col-md-12 > div > p:nth-child(1) > a:nth-child(1)")
      .invoke("text")
        .then((termsText) => {
          expect(termsText).equal("Terms and Conditions");
        })
    });
  
    //// This looks like a bug
    //// 'href' should be 'terms' in Line.26
    ////and the link should navigate to /terms page instead of the privacy page in Line.29

    it("Verify Terms and Conditions link works", () => {
      cy.get("body > div.col-md-12 > div > p:nth-child(1) > a:nth-child(1)")
      .should('have.attr', 'href').and('include', 'privacy')
      .then((href) => {
          cy.visit(href)
          cy.url().should('include', '/qainterview.pythonanywhere.com/privacy')
      })
    });
  
    //Privacy
  
    it("Verify Privacy link text", () => {
      cy.get('body > div.col-md-12 > div > p:nth-child(1) > a:nth-child(2)')
      .invoke('text')
        .then((privacyText) => {
          expect(privacyText).equal('Privacy');
        })
    });
  
    //// This looks like a bug
    //// 'href' should be 'privacy' in Line.48
    ////and the link should navigate to /privacy page instead of the terms page in Line.51
    it("Verify Privacy link works", () => {
      cy.get('body > div.col-md-12 > div > p:nth-child(1) > a:nth-child(2)')
      .should('have.attr', 'href').and('include', 'terms')
      .then((href) => {
          cy.visit(href)
          cy.url().should('include', '/qainterview.pythonanywhere.com/terms')
      })
    });
  });
  