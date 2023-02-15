import { BasePage } from './basePage';
import { assert } from 'chai'


export class TrelloElement {
    public static Element(locator: string) {

        return new BasePage(locator);
    }
}

export class TrelloLoginPage extends TrelloElement {

    static emailIdTextBox() { return this.Element('#user') };
    static continueBtn() { return this.Element('#login') };
    static loginText() { return this.Element("//div[contains(text(),'Log in to continue to:')]") };
    static passwordTxtBox() { return this.Element('#password') };
    static loginBtn() { return this.Element("button[id='login-submit'] span[class='css-178ag6o']") };
    static homePageText() { return this.Element("button[title='Workspaces'] span[class='Wl2FeSr_eBix8W']") };


 


    static async loginToTrelloSite(loginId:string,password:string) {
        await driver.url('https://trello.com/en/login');
        await driver.maximizeWindow()
        await this.emailIdTextBox().addValue(loginId);
        await this.continueBtn().click();
        await this.loginText().waitForDisplayed();
        await this.passwordTxtBox().addValue(password);
        await this.loginBtn().click();
        return this.homePageText().getVisibleText()

     
    }

}










