/// <reference types="cypress"/>

describe('Cadastrar Dispositivos', () => {
    //Open Cypress | Set ".only"
    it('Cadastrar Dispositivo', () => {

        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }
        
        cy.request({
        method: 'POST',
        url:'https://api.restful-api.dev/objects',
        failOnStatusCode: false,
        body: body
      
     
   }).as('postDeviceResult')
    //validações
    cy.get('@postDeviceResult').then((response) => {
        expect(response.status).equal(200)
        expect(response.body.id).not.empty
        expect(response.body.createdAt).not.empty
    })

    })

})