describe ("Caso de prueba",function(){
    beforeEach(function(){
        cy.visit("/");
})

    it ('Caso de prueba servicios ambulatorio')
    cy.get('#strUsuario').type('facevedo')
cy.get('#strPass').type('Khloe12345678')
cy.get('#btt-login,btn').click();

cy.get('#srch-text-prestador').type('cubano')
 cy.get('#btt-buscar-prestador').click();
cy.get('#srch-text-medico').type ('CO General')
cy.get('#btt-buscar-medico > .bold-text').click();
cy.get('#srch-ced-medico').type('22301068155')
cy.get('#srch-ced-afiliado').type('01300186374')
cy.get('#btt-buscar-afiliado').click();
cy.get('.active > a > strong').click();
cy.get('.active > a > strong').click();
cy.get('.srch-text-diagnostico').type('dolor abdomina')
/*cy.get('.btt-buscar-diagnostico > .bold-text').click();
cy.get('#btt-nap').click();
*/
})

