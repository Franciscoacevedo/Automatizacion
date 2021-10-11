describe ("SOA 1 ",()=>{
  
  it ('Entrar al modulo',()=>{  
    //beforeEach(function(){
      //beforeEach(() =>{
        cy.visit('http://sns-wqa-002/Intranet/Account/login');





})

cy.get('#Usuario').click();
cy.get('#Usuario').type('facevedo');
cy.get('#Contrasena').type('Khloe12345678');
cy.get('.container-fluid > .row').click();
cy.get('#btnIncSession').click();
cy.get('#frmLogin').submit();
cy.url().should('contains', 'http://sns-wqa-002/Intranet/');
cy.get('.col-md-7:nth-child(90) > .module-title2').click();
cy.url().should('contains', 'http://sns-wqa-002/Sistemas/SOA/');


//  cy.reload();

  // Intermediacion 
 
})
