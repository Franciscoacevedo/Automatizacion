//import LoginPage from '../../support/page/Login';
//import PrestadorPage from '../../support/page/Prestador';
//beforeEach(function(){
  describe ("Caso de prueba login, ambulatorio Flujo Basico",( )=> {
    //  beforeEach(function(){
  it ("Ambulatorio",()=> {  
     //beforeEach(function(){
         
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
      cy.get('#srch-text-medico').type ("co gene")
      cy.get('#btt-buscar-medico').click();
      cy.wait(2000);

  //it(" Afiliado",function(){
      //cy.reload();
     // cy.wait(2000);

  cy.get('#srch-ced-medico').type('22301068155')
  cy.get('#srch-ced-afiliado').type('02000072971')
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
cy.get('[Id="srch-text-procedimiento"]').type('colesterol');
cy.get('#btt-buscar-procedimientos > .bold-text').click();
//cy.get('[data-simon="566"] > :nth-child(9) > .btn').click();
cy.get('[data-simon="465"] > :nth-child(9) > .btn').click();
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.wait(2000);
cy.get('[Id="srch-text-procedimiento"]').type('falciform');
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="566"] > :nth-child(9) > .btn').click();
cy.get('[Id="srch-text-procedimiento"]').type('COLESTEROL DE ALTA DENSIDAD');
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="466"] > :nth-child(9) > .btn').click();

cy.get('[Id="srch-text-procedimiento"]').type('COLESTEROL DE BAJA DENSIDAD').click();
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="467"] > :nth-child(9) > .btn').click();

cy.get('[Id="srch-text-procedimiento"]').type('TRIGLICERIDOS').click();
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="672"] > :nth-child(9) > .btn').click();

cy.get('[Id="srch-text-procedimiento"]').type('GLUTAMICOPIRUVICA').click();
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="412"] > :nth-child(9) > .btn').click();


cy.get('[Id="srch-text-procedimiento"]').type('OXALACETICA').click();
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="413"] > :nth-child(9) > .btn').click();

cy.get('[Id="srch-text-procedimiento"]').type('Dengue, ANTICUERPOS Ig G').click();
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="541"] > :nth-child(9) > .btn').click();
cy.get('[Id="srch-text-procedimiento"]').type('Dengue, ANTICUERPOS Ig M').click();
cy.get('#btt-buscar-procedimientos > .bold-text').click();
cy.get('[data-simon="542"] > :nth-child(9) > .btn').click();

cy.wait(2000);
cy.get('.ui-dialog-titlebar-close').click();
cy.get('#btt-nap').click();
})
})


//'#strUsuario';
//'#btt-login,btn';

/*
//Milisegundoo
cy.get('.my-slow-selector', { timeout: 10000 })
Nueva descripciones 
cy.contains()
Elemento de busquedas
.blur() - Hacer un desenfoque de elemento DOM enfocado.
.focus() - Centrarse en un elemento DOM.
.clear() - Borrar el valor de una entrada o área de texto.
.check() - Marque la (s) casilla (s) de verificación o la (s) radio (s).
.uncheck() - Desmarque la (s) casilla (s) de verificación.
.select()- Seleccione un <option>dentro de a <select>.
.dblclick() - Haga doble clic en un elemento DOM.
.rightclick() - Haga clic con el botón derecho en un elemento DOM.
*/