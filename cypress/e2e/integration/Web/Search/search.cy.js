/// <reference types="cypress" />

const loginData = require('../../../../fixtures/Login/data/login-data.json')

let nameProduct = 'Printed'
let productNonexistent = 'Vestido'

describe('Search Products', () => {

    before(() => {
        cy.visit('/')
        cy.doLoginWithSucess(loginData.actionUser.username, loginData.actionUser.password)
    });

    afterEach(() => {
        cy.clearSearchField()
    });

    it('Campo de Busca em branco', () => {
        cy.performSearchBlankField()
    });

    it('Realizar Busca de Produto Existente', () => {
        cy.performSearchSuccessfully(nameProduct)
    });

    it('Realizar Busca de Produto Inexistente', () => {
        cy.performSearchForNonExistingProduct(productNonexistent)
    });
});



