class Loginpage{
    constructor(){
   this.ambulatorioInput='#strUsuario';
   this.ambulatorioInput ='#strPass';
   this.ambulatorioButton='#btt-login,btn';
}
 ambulatorio = (element) =>{
cy.get(this.ambulatorioInput).type(element);
cy.get(this.ambulatorioButton).click();
      }
      }
      export default  new  Loginpage
  
  // Esta classe es para buscar 2 veces o mas un mismo elemento.