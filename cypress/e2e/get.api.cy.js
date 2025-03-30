/// <reference types="cypress"/>

describe('Buscar Dispositivos', () => {
    //Open Cypress | Set ".only"
    it('Buscar Dispositivo específico', () => {
        cy.request({
          method: 'GET',
          url:'https://api.restful-api.dev/objects/7',
          failOnStatusCode: false
        }).as('getDeviceResult') // Criamos um alias para realizar as validações em cima do resultado da chamada
        
        
        //validações
        cy.get('@getDeviceResult')
            .then((response) =>{
                expect(response.status).equal(200)//status code
                expect(response.body.id).equal(String('7')) //consulta o id está correto
                expect(response.body.name).equal("Apple MacBook Pro 16") // Valida campo name
                expect(response.body).not.empty

                expect(response.body.data['CPU model']).not.empty //Quando são duas palavras como CPU Model

        })

    })
})