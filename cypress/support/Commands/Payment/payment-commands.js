/// <reference types="cypress" />

const searchSelectors = require('../../Selectors/Search/search-selectors.json');
const paymentSelectors = require('../../Selectors/Payment/payment-selectors.json');
const messageSelectors = require('../../Selectors/Messages/messages-selectors.json');


Cypress.Commands.add('clearSearchField', () => {
    cy.get(searchSelectors.fields.search).clear()
});

Cypress.Commands.add('redirectScreenOfPayment', (nameProductPayment) => {
    cy.get(paymentSelectors.buttons.paymentButton).click()
    cy.get(paymentSelectors.buttons.buttonPaymentInSummary).click()
    cy.get(paymentSelectors.buttons.buttonPaymentInAdressAndShipping).click()
    cy.get(paymentSelectors.buttons.checkboxAgreeTherms).check()
    cy.get(paymentSelectors.buttons.buttonPaymentInAdressAndShipping).click()
    cy.get(paymentSelectors.fields.productDescription).contains(nameProductPayment)
});





