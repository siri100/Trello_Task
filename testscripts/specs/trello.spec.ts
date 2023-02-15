import { TrelloLoginPage } from '../common/pages/trello.login.page';
import { TrelloBoardPage } from '../common/pages/trello.board.page';
import { assert, expect } from 'chai';
import * as commonData from "../common/support/testdata.json";

describe('Trello Software Test Suite : ', () => {

  before('Verify login funtionality for Trello Site', async () => {

    let homePageText = await TrelloLoginPage.loginToTrelloSite(commonData.loginID, commonData.password);
    expect(homePageText).to.be.equal('Workspaces');


  });
  it('Verify Create new borad ,add list,Drag and drop card', async () => {

    let newBoardFlag = await TrelloBoardPage.createNewBoard();
    expect(newBoardFlag).to.be.true;

    await TrelloBoardPage.addLists(commonData.listNames.listA , commonData.listNames.listB);
    await TrelloBoardPage.addCard(commonData.cardName);
    await TrelloBoardPage.dragAndDropCard();

    


  });

});


