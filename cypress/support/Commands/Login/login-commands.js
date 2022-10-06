/// <reference types="cypress" />

const loginSelectors = require('../../Selectors/Login/login-selectors.json');
const messageSelectors = require('../../Selectors/Messages/messages-selectors.json');

Cypress.Commands.add('Logout', () => {
    cy.get('a.logout').click()
});

Cypress.Commands.add('clearLoginField', () => {
    cy.get(loginSelectors.fields.username).clear()
    cy.get(loginSelectors.fields.password).clear()
});

Cypress.Commands.add('doLogin', (userName, password) => {
    cy.get(loginSelectors.fields.username).type(userName)
    cy.get(loginSelectors.fields.password).type(password)
    cy.get(loginSelectors.loginButton).click()
});

Cypress.Commands.add('doLoginWithSucess', (userName, password) => {
    cy.get(loginSelectors.screenLogin).click()
    cy.doLogin(userName, password)
    cy.get(messageSelectors.messageContainer).should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
});

Cypress.Commands.add('doLoginWithInvalidUsername', (userName, password) => {
    cy.doLogin(userName, password)
    cy.get(messageSelectors.messageErrorLogin).should('have.text', 'Invalid email address.')
});

Cypress.Commands.add('doLoginWithInvalidUserPassword', (userName, password) => {
    cy.doLogin(userName, password)
    cy.get(messageSelectors.messageErrorLogin).should('have.text', 'Authentication failed.')
});

Cypress.Commands.add('doLoginWithUserandPasswordInvalid', (userName, password) => {
    cy.doLogin(userName, password)
    cy.get(messageSelectors.messageErrorLogin).should('have.text', 'Invalid email address.')
});

Cypress.Commands.add('doLoginWithUserandPasswordVoids', () => {
    cy.get(loginSelectors.loginButton).click()
    cy.get(messageSelectors.messageErrorLogin).should('have.text', 'An email address required.')
});



