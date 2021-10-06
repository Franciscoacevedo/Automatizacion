describe ("Planes ALTERNATIVOS DE SALUDS  ",()=>{
  
    it ('Entrar al modulo',()=>{  
      //beforeEach(function(){
        //beforeEach(() =>{
    cy.visit("http://sns-wqa-002/Sistemas/pc/");
    cy.reload();
    cy.wait(2000)

  
    // Intermediacion 
    cy.get('#a1_2').click();
    cy.wait(2000)
    cy.get('#lkbNewInterm').click();
    cy.wait(2000)

  // cy.get('[id="IdTipoReferencia"]').click();
  cy.get('[id="IdTipoReferencia"]').select('Empresa');
    //cy.get('#IdTipoReferencia').type('Empresa')
    cy.wait(2000)
    cy.get('#s2id_IdReferencia > .select2-choice > .select2-chosen').click();
    cy.get('#select2-drop > .select2-search > .select2-input').type('juan de jesus');
    cy.get(':nth-child(1) > .select2-result-label').click();
    cy.wait(2000)
    cy.get('#PorCentaje').type('5');
    cy.get('[id="IdTipoAgente"]').select('Promotor');
    cy.get('#Licencia').type('1');
    cy.get('#ExpiraLicencia').click();
    cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click();
    cy.wait(2000)
    cy.get('[ id="IdZonaComercial"]').select('Norte');
    cy.get('#s2id_IdPersonalInterno > .select2-choice > .select2-chosen').type('Juan pablo jose almonte');
    cy.get(':nth-child(1) > .select2-result-label').click();
    cy.get('.ui-dialog-buttonset > .btn-blue').click();
  

    cy.get('#popup_ok').click();
    cy.wait(2000)
    cy.get('#showMenu > .glyphicon').click();

   
    ///Crear poliza
  
    cy.get('#b1').click();
    cy.get('#b1_1').click();
    cy.wait(2000);
    cy.get('#lkbNew').click();
    cy.wait(2000);
    cy.get('#Nombre').type('PlAN DE PRUEBA AUTOMATIZADA')
    cy.get('#PlanDesc').type('Este es un plan complementario con las siguientes caracteristicas Cobertura ambulatoria Ilimitadas. Diferencia por consulta Laboratorios 80% ilimitado')
    cy.wait(2000);
    cy.get('[id="IdTipoPlan"]').select('COMPLEMENTARIO')
    cy.wait(2000);
    cy.get('#Prima').type('250.00')
    cy.get('#IdArticuloAX').type('84131602.01')
    cy.get('#Simon').type(52200019);
    cy.get('.btn-blue > .ui-button-text').click()
    cy.wait(2000)
    cy.get('#popup_ok').click()
    cy.wait(2000);
    cy.get('#ui-id-2').click();
    cy.get('#ui-id-1').click();
  //  cy.get('#IdGrupo').click();
  
    cy.get('[name="IdGrupo"]').focus();
    cy.wait(2000);
    cy.get('[id="IdGrupo"]').select('4');
    cy.wait(2000);
    cy.get('[id="IdSubGrupo"]').select('Emergencia');
    cy.wait(2000);
    cy.get('.select2-chosen').click()
    cy.wait(2000);
    cy.get('.select2-input').type('urea')
    cy.get('.select2-highlighted > .select2-result-label > div').click()
    //cy.get('[id="IdGrupo"]'). ('Emergencia')
    //cy.get('#IdProcedimiento').type('sala de emergencia y/o uregencia')

// COBERTURAS 

cy.wait(2000)
//cy.get('#showMenu > .glyphicon').click();
cy.get('#b1').click();
cy.wait(2000)
cy.get('#b1_2').click();

// COBERTURAS 

cy.get ('[id="IdPlan"]').select('210')
cy.wait(2000)
cy.get ('[id="IdGrupo"]').select('4');
cy.wait(2000)
cy.get('[id="IdSubGrupo"]').select('Emergencia')
cy.wait(2000)
cy.get('.select2-chosen').click()
cy.wait(2000)
cy.get('.select2-input').type('urea')
///cy.get('.select2-highlighted > .select2-result-label > div').click()
cy.wait(2000)
cy.get('#lkbSeach').click()

cy.wait(2000);
cy.reload()
cy.get('[id="lkbNewCobertura"]').click();
cy.get('.col-xs-18 > #IdPlan').select('220');
cy.wait(2000);
cy.get('[id="Grupo"]').select('4');
cy.wait(2000);
cy.get('#SubGrupo').select('Emergencia');
cy.get('.select2-chosen').type('urea');
cy.get('.select2-highlighted > .select2-result-label > div').click();
cy.wait(2000);
cy.get('#lkbNewCobertura').click();

cy.wait(2000);cy.wait(2000);
cy.get('[id="TipoValor"]').select('1');
cy.get('#ValorCobertura').type('20');
cy.get('#TopeCobertura').type('5000');
//cy.get('.ui-dialog-b
cy.wait(2000)


cy.get('[class=ui-dialog-buttonset]').click();



//cy.wait(2000)
//cy.get('[class="btn-blue ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').first().click();
//cy.wait(2000)
//cy.get('[class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]').first().click();
//cy.title()
//cy.title().should('Seguro que desea procesar?')
   
  
//cy.get('[id="CerrarModal"]').click();
//cy.get('#popup_ok').click()
//cy.contains('Guardar').focus();
//cy.focused()
//cy.wait(2000);
//cy.contains('Si').click();
//expect (true).to.equal(true)
//cy.wait(2000)
 ///"basrUrl": "http://sns-wqa-002/sistemas/Autorizaciones-produccion/login.asp?token=&sid=6871"

})


})
      
//})


//cy.get('[Id="srch-text-procedimiento"]').type('hemogra');



