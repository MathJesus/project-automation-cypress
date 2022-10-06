/// <reference types="cypress" />

const baseUrl = "https://api.trello.com"

Cypress.Commands.add('api_getList', () => {
    const path = '/1/actions/592f11060f95a3d3d46a987a';

    cy.request({
        method: 'GET',
        url: `${baseUrl}${path}`,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });
});