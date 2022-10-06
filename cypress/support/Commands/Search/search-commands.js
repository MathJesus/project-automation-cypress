/// <reference types="cypress" />

const searchSelectors = require('../../Selectors/Search/search-selectors.json');
const messageSelectors = require('../../Selectors/Messages/messages-selectors.json');


Cypress.Commands.add('clearSearchField', () => {
    cy.get(searchSelectors.fields.search).clear()
});

Cypress.Commands.add('performSearchBlankField', () => {
    cy.get(searchSelectors.buttons.searchButton).click()
    cy.get(messageSelectors.messageContainer).contains('Please enter a search keyword')
});

Cypress.Commands.add('performSearchSuccessfully', (nameProduct) => {
    cy.get(searchSelectors.fields.search).type(nameProduct)
    cy.get(searchSelectors.buttons.searchButton).click()
    cy.get(searchSelectors.body).contains(nameProduct)
});

Cypress.Commands.add('performSearchForNonExistingProduct', (productNonexistent) => {
    cy.get(searchSelectors.fields.search).type(productNonexistent)
    cy.get(searchSelectors.buttons.searchButton).click()
    cy.get(messageSelectors.messageContainer).contains(`No results were found for your search "${productNonexistent}"`)
});



