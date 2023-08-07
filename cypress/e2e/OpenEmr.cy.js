import { LoginPage } from "./pages/login_page";
import { HomePage } from "./pages/home_page";

const logpg = new LoginPage()
const homepageobj = new HomePage()

describe('Open EMR Test',() => {
    it('OpenEmr Login',() => {       
        cy.fixture('OpenEmrLoginData').then(wholedataset => {
            wholedataset.forEach(userdata => {
                
                const username =userdata.usernamevalue;
                const password = userdata.passwordvalue;
                
                logpg.Launch_Url()
                logpg.EnterUserName(username);
                logpg.EnterPassword(password);
                logpg.ClickLoginButton();
                cy.wait(8000);

                if(username=="Admin" && password=="admin123"){
                    homepageobj.MenuBar();
                    cy.wait(3000);
                    homepageobj.LogoutOption();
                    cy.wait(3000);
                }
                else{
                    cy.log("Invalid credentials !!")
                }

            });
        });
    });
});

