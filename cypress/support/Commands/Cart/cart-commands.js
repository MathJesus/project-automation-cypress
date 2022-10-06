/// <reference types="cypress" />

const searchSelectors = require('../../Selectors/Search/search-selectors.json');
const cartSelectors = require('../../Selectors/Cart/cart-selectors.json');
const messageSelectors = require('../../Selectors/Messages/messages-selectors.json');


Cypress.Commands.add('clearSearchField', () => {
    cy.get(searchSelectors.fields.search).clear()
});

Cypress.Commands.add('addproductToCart', () => {
   cy.get(cartSelectors.fields.iconTableListProduct).click()
   cy.get(cartSelectors.buttons.addToCart).first().click()
   cy.get(messageSelectors.messageAddToCartWithSucess).contains('Product successfully added to your shopping cart')
});



