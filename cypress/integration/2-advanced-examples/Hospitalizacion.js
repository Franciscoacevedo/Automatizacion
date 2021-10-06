//import LoginPage from '../../support/page/Login';
//import PrestadorPage from '../../support/page/Prestador';
//beforeEach(function(){
  describe ("Caso de prueba login, Hospitaizacion Flujo Basico",function(){
    //  beforeEach(function(){
  it ("HOSPITALIZACION",function(){  
    // beforeEach(() =>{
    //  it ("HOSPITALIZACION",function(){  
      cy.visit("/");
  cy.reload();
  
  
  })
  //cy.get('.header-img').click();
  //cy.get('a').click();
  
   it("Permite registrar login",function(){
      cy.get('#strUsuario').type('facevedo')
      cy.get('#strPass').type('Khloe12345678')
      cy.get('#btt-login,btn').click();
      //cy.get('.header-img').click();
     // cy.get('#wrap > div').click();
  })
  
  it(" Prestador",function(){
      cy.reload();
      cy.wait(2000);
      cy.get('#srch-text-prestador').type('cubano')
      cy.get('#btt-buscar-prestador').click();
      cy.get('#srch-text-medico').type ("JUAN PABLO ROSARIO")
      cy.get('#btt-buscar-medico').click();
      cy.wait(2000);
  //})
  //it(" Afiliado",function(){
      //cy.reload();
     // cy.wait(2000);
  cy.get('#srch-ced-medico').type('22301068155')
  cy.get('#srch-ced-afiliado').type('01300186374')
  cy.get('#btt-buscar-afiliado').click();
  cy.get(':nth-child(4)>a').click();
//})
//it("QUE PERMITA SELECCIONAR TAB-HOSPITALIZACION CLINICA", function(){

cy.get(':nth-child(6) > a > strong').click();
cy.get(':nth-child(5) > a > strong').click();
//})
//it("SELECIONE TIPO DE SERVICIOS",function(){
cy.get('#select-tipoHosp').select ('5');
//})
//it("PERMITIR SELECCIONAR TIPO DE INGRESO",function(){
cy.get('#select-clasificacionHosp').select('5.1');
//})
//it("PERMITA BUSCAR DIAGNOSTICO MEDICO", function(){
cy.get('.srch-cdg-diagnostico').type('r101');
cy.get('.btt-buscar-diagnostico > .bold-text').click();
//})
//it("PERMITA REGISTRAR NUMERO DE AUTORIZACION",function(){ 
cy.get('#btt-nap').click();

cy.contains('NAP:')
//cy.get('[data-layer="Content"]').click();
//cy.get('#bbt-agregar').click();
//cy.wait(2000);
//cy.get ('[id="srch-text-prestador-Sec"]').type("cubano");
//cy.get('#btt-buscar-prestador-Sec > .bold-text').click();
//cy.get('[id="input-nap"]').click();

})



/*
PONER CHECK AMBULATORIO
cy.get('#check-ambulatorio').check();
/*
/*
cy.get('[Id="select-tipoHosp"]');

cy.get('[Id="select-tipoHosp"]').type('Hos')
cy.get('.srch-text-diagnostico').type('dolor abdominal')
cy.get('.btt-buscar-diagnostico > .bold-text').click();
cy.get('.btt-buscar-procedimientos').click();
cy.get('[Id="srch-text-procedimiento"]').type('hemogra');
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-subgrupo="8.1"] > :nth-child(9) > .btn').click();
cy.get('.ui-dialog-titlebar-close').click();
cy.get('#btt-nap').click();
*/


///})

})