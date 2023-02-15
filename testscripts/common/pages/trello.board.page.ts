import {TrelloLoginPage } from './trello.login.page';
import { assert } from 'chai'
import { BasePage } from './basePage';


export class TrelloBoardPage extends TrelloLoginPage {

    static createNewBoardBtn() { return this.Element('.board-tile.mod-add') };
    static boardNameTxtBox() { return this.Element("//input[@type='text']") };
    static createBtn() { return this.Element("//button[contains(text(),'Create')]") };
    static newBoardTxt() { return this.Element("(//*[contains(text(),'New Board')])[1]") };
    static addListTitleTxtBox() { return this.Element("input[placeholder='Enter list title…']") };
    static addListBtn() { return this.Element("input[value='Add list']") };
    static addCardLink() { return this.Element("(//*[contains(text(),'Add a card')])[1]") };
    static addCardName() { return this.Element("//textarea[@placeholder='Enter a title for this card…']") };
    static addCardBtn() { return this.Element("input[value='Add card']") };
    static cardElement() { return this.Element(".list-card.js-member-droppable.ui-droppable.ui-sortable-handle") };
    static targetElement() { return this.Element("(//*[contains(text(),'Add a card')])[2]") };



 


    static async createNewBoard() {
        await this.createNewBoardBtn().click();
        await this.boardNameTxtBox().addValue('My New Board');
        await this.createBtn().waitForDisplayed();
        await this.createBtn().click();
        await this.newBoardTxt().waitForDisplayed();
        return this.newBoardTxt().isDisplayed();
     
    }


    static async addLists(listAName:string,listBName:string) {
        await this.addListTitleTxtBox().addValue(listAName)
        await this.addListBtn().click()
        await this.addListTitleTxtBox().addValue(listBName)
        await this.addListBtn().click()
     
    }

    static async addCard(cardName:string) {
        await this.addCardLink().click()
        await this.addCardName().addValue(cardName)
        await this.addCardBtn().click()

    }

    static async dragAndDropCard() {
        const source = await $('.list-card.js-member-droppable.ui-droppable.ui-sortable-handle')
        const target = await $("(//*[contains(text(),'Add a card')])[2]")
        await source.dragAndDrop(target);
        let cardCoordinatesX = (await source).getLocation('x');
        let cardCoordinatesY = (await source).getLocation('x');
        console.log(`x co-ordinate of card is : ${cardCoordinatesX} and y co-ordinate of card is : ${cardCoordinatesY}`);
        await driver.pause(10000)
    }
}










