export class HomePage{

    homepageMenubar ='.oxd-userdropdown-tab > .oxd-icon'
    homepageLogoutOption = 'Logout'

    MenuBar(){
        cy.get(this.homepageMenubar).click();
    }

    LogoutOption(){
    cy.contains(this.homepageLogoutOption).click();
    }
}