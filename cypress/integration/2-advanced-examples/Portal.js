describe ("Caso de prueba login, ambulatorio Flujo Basico",function(){
  //  beforeEach(function(){
it ("Portal Autorizaciones Medicas ",function(){  

cy.visit('http://sns-wqa-002/Sistemas/Centros/PortalAutorizaciones/login.asp?token=&sid=6871');
//cy.reload();
})

it("Permite registrar login",function(){
   cy.reload();

   cy.get('#strCedula').type('402-1557927-3')
    cy.get('#strUsuario').type('2075')
    cy.get('#strPass').type('21260b7')
    cy.get('#btt-login,btn').click();
   // cy.wait(2000)
 
cy.get('#srch-text-medico').type('CO General');
cy.get('#btt-buscar-medico > .bold-text').click();
   //cy.get('#srch-ced-medico').type('22301068155')
 cy.get('#srch-ced-afiliado').type('02800339455')
cy.get('#btt-buscar-afiliado').click();
cy.get(':nth-child(4)>a').click();
cy.get(':nth-child(3) > a > strong').click();
cy.get(':nth-child(4)>a').click();
cy.get('.srch-text-diagnostico').type('dolor abdominal')
cy.get('.btt-buscar-diagnostico > .bold-text').click();
cy.get('.btt-buscar-procedimientos').click();
cy.get('[Id="srch-text-procedimiento"]').type('hemogra');
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-subgrupo="8.1"] > :nth-child(9) > .btn').click();
cy.get('[Id="srch-text-procedimiento"]').type('coprologico');
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.wait(2000);
cy.get('[data-simon="480"] > :nth-child(9) > .btn').click();
//cy.get('[Id="srch-text-procedimiento"]').type('colesterol');
cy.get('#btt-buscar-procedimientos > .bold-text').click();
//cy.get('[data-simon="566"] > :nth-child(9) > .btn').click();

cy.wait(2000);
cy.get('.ui-dialog-titlebar-close').click();
cy.get('#btt-nap').click();
})
})  


