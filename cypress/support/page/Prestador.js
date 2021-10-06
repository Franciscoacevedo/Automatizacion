class PrestadorPage{
constructor(){
    this.emergenciasInput='#srch-text-prestador';
    this.emergenciasButton='#btt-buscar-prestador';

}
emergencia =(Element) =>{  
    cy.get(this.emergencias.Input).type(element);
    cy.get(this.emergencias.Button).Click();
}
}
export default new PrestadorPage





