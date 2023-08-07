export class LoginPage{


LoginUrl ='https://opensource-demo.orangehrmlive.com/'
username_text =':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
password_text = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
login_button ='.oxd-button'

Launch_Url(){
    cy.visit(this.LoginUrl)
}
EnterUserName(username){
    cy.get(this.username_text).type(username);
}
EnterPassword(password){
    cy.get(this.password_text).type(password);
}
ClickLoginButton(){
    cy.get(this.login_button).click();

}


}


