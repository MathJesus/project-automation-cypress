/// <reference types="cypress" />

const loginData = require('../../../../fixtures/Login/data/login-data.json')

let nameProduct = 'Printed'
let nameProductPayment = 'Printed Summer Dress'

describe('Payment', () => {

    before(() => {
        cy.visit('/')
        cy.doLoginWithSucess(loginData.actionUser.username, loginData.actionUser.password)
    });

    afterEach(() => {
        cy.clearSearchField()
    });

    it('Inserir Produto no carrinho com Sucesso', () => {
        cy.performSearchSuccessfully(nameProduct)
        cy.addproductToCart()
        cy.redirectScreenOfPayment(nameProductPayment)
    });
});



