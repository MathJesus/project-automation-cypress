/// <reference types="cypress" />

const loginData = require ('../../../../fixtures/Login/data/login-data.json')

describe('Login', () => {
  
  before(() => {
    cy.visit('/')
  });

  beforeEach(() => {

  });

  afterEach(() => {
    cy.clearLoginField()
  });

  it('Realizar Login com Usuario Válido', () => {
    cy.doLoginWithSucess(loginData.actionUser.username, loginData.actionUser.password)
    cy.Logout()
  });

  it('Realizar Login com Nome de Usuario Invalido', () => {
      cy.doLoginWithInvalidUsername(loginData.actionUserInvalid.usernameInvalid, loginData.actionUser.password)
  });

  it('Realizar Login com Senha de Usuario Invalida', () => {
   cy.doLoginWithInvalidUserPassword(loginData.actionUser.username, loginData.actionUserInvalid.passwordInvalid)
  });

  it('Realizar Login com Senha e Nome de Usuario Invalido', () => {
    cy.doLoginWithUserandPasswordInvalid(loginData.actionUserInvalid.usernameInvalid, loginData.actionUserInvalid.passwordInvalid)
  });

  it('Tentativa de Login ao deixar Campos sem serem preenchidos', () => {
    cy.doLoginWithUserandPasswordVoids()
  });
});



