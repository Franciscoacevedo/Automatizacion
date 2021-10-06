//import LoginPage from '../../support/page/Login';
//import PrestadorPage from '../../support/page/Prestador';
//beforeEach(function(){


describe ("Caso de prueba login, Emergencia Flujo Basico",function(){
  //  beforeEach(function(){
it ("Emergencia",()=>{  
   //beforeEach(function(){
       
      cy.visit("/");
cy.reload();


})
//cy.get('.header-img').click();
//cy.get('a').click();

 it("Permite registrar login",()=>{
    // cy.login()
    cy.get('#strUsuario').type('facevedo')
    cy.get('#strPass').type('Khloe12345678')
    cy.get('#btt-login,btn').click();
    //cy.get('.header-img').click();
    //cy.get('#wrap > div').click();
})

it(" Prestador",()=>{

   
   // cy.reload();
    //cy.wait(2000);
    cy.get('#srch-text-prestador').type('cubano')
    cy.get('#btt-buscar-prestador').click();
    //cy.get('#srch-select-prestador').contains('"CENTRO MEDICO DOMINICO CUBANO SRL"');
    cy.get('#srch-text-medico').type ("co gene")
    cy.get('#btt-buscar-medico').click();
    cy.wait(2000);
//})
//it(" Afiliado",function(){
    //cy.reload();
   // cy.wait(2000);
cy.get('#srch-ced-medico').type('22301068155')
cy.get('#srch-ced-afiliado').type('01300186374')
cy.get('#btt-buscar-afiliado').click();
cy.get(':nth-child(3)>a').click();
cy.get(':nth-child(4) > a > strong').click();
cy.get(':nth-child(3)>a').click();
cy.get('.srch-text-diagnostico').type('dolor abdominal')
cy.get('.btt-buscar-diagnostico >.bold-text').click();
cy.get('.btt-buscar-diagnostico >.bold-text').click();
cy.get('#btt-nap').click();
})


})





//'#strUsuario';
//'#btt-login,btn';