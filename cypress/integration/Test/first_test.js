describe ("Drmars ",function(){
  
  it ('Pantalla grupo Seguimiento',function(){  
    //beforeEach(function(){
      //beforeEach(() =>{
  cy.visit("http://sns-wqa-002/Sistemas/DMARS/grupos");
  //cy.get('.v-application--wrap > :nth-child(2) > :nth-child(1)').rightclick();
  })
  
  it("Agregar un grupo", function(){
   // cy.reload()
    cy.wait(2000);
    cy.get('.mb-2 > .v-btn__content').click();
    cy.wait(2000);
   })
  
    it ("Crear Circulo", function(){
      cy.wait(2000);
      cy.get('#input-55').type("QA3 ")
  //cy.wait(2000);
    })
    it ("Subgrupo",function(){  
      cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
     //cy.get('[Id="select-tipoHosp"]');
    //cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
  //cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
  cy.get('#list-item-88-0 > .v-list-item__action > .v-simple-checkbox > .v-icon').click();
  cy.get('#list-item-88-1 > .v-list-item__content').click();
  cy.get('#list-item-88-2 > .v-list-item__content > .v-list-item__title').click();
  cy.get('#list-item-88-3 > .v-list-item__content > .v-list-item__title').click();
  cy.get(':nth-child(6) > .v-input > .v-input__control > .v-text-field__details > .v-messages').click(); 
  cy.wait(2000);
  })
  it("agregar medico", function(){
    //cy.get('#input-96').click();
   cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
   cy.wait(2000);
   //cy.get('[Id="#input-76"]').click();
  
   // cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
   // cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click();
   cy.get('#list-item-103-0 > .v-list-item__content > .v-list-item__title').click();
   cy.wait(2000);
   cy.get('#list-item-103-1 > .v-list-item__content > .v-list-item__title').click();
   cy.wait(2000);
   cy.get('#list-item-103-2 > .v-list-item__content > .v-list-item__title').click();
   cy.wait(2000);
  cy.get(':nth-child(3) > .v-btn__content').click();
  cy.wait(2000);
  //cy.get(':nth-child(3) > a')
    //cy.wait(2000);
  })
  it( " Pantalla afiliado Afiliados", function(){
  cy.reload();
    cy.wait(2000);
  cy.get(':nth-child(3) > a').click();
      //cy.get(':nth-child(3) > a').click();
      cy.get('.v-responsive__content').click();
      cy.wait(2000);
      cy.get(':nth-child(3) > a').click();
      //cy.wait(2000);
      cy.wait(2000);
    //it ('Buscar por nss', function() {
      cy.get('#input-62').type("000091851");
      cy.wait(2000);
      cy.get('.white--text > .v-btn__content').click(); 
      cy.wait(2000);
  
    })
    it ('Editar afiliado', () =>{
      //cy.wait();
     cy.wait(2000);
     cy.get('.mdi-pencil').click();
     cy.get('.v-card__actions > :nth-child(2)').click();
     cy.get('.mdi-pencil').click();
     cy.wait(2000);
      cy.get(':nth-child(10) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections').click();
      cy.wait(2000);
       cy.get('#list-item-156-3 > .v-list-item__content > .v-list-item__title').click();
      //cy.get('#list-item-153-1 > .v-list-item__content > .v-list-item__title').click();
      //cy.wait(2000);
      //cy.get('.v-card__actions > :nth-child(3)').click();
     // cy.wait(2000);
     // cy.get('#list-item-156-3 > .v-list-item__content > .v-list-item__title').click();
      cy.wait(2000);
      cy.get(':nth-child(3) > .v-btn__content').click();
  
    })
  
  
   it ('SI LLEGAMOS HASTA AQUI TERMINAMOS!', () =>{ 
  
  
   })
  })
  
  //  it ('Farmacias', () =>{  
   // cy.wait(2000);
   //   cy.get('.active').click();
  
    //  cy.get('#input-193').type("famaz normal")
     // cy.get('.md1 > .white--text').click();
  
     // /cy.wait(2000);
  
  //})
  
  
  
  