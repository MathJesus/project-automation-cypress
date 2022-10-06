/// <reference types="cypress" />

describe('List API', () => {
    it('Listar Dados de Api com Sucesso', () => {
        cy.api_getList().then(data => {
            expect(data.body.data.list.name).to.be.equal('Professional')
            expect(data.status).to.be.equal(200)
        })
    });
});



