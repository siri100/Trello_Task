const {Builder,By, until} = require('selenium-webdriver');
const {expect} = require('chai');


async function task(){

    let driver = new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts( { implicit: 10000 } );

    await driver.get('https://trello.com/en/login');
    let trelloTitle = await driver.getTitle();
    expect(await trelloTitle).to.be.equal('Log in to Trello');
    await driver.manage().window().maximize()

    await driver.findElement(By.id('user')).sendKeys('srinivas.madnal@gmail.com');
    await driver.findElement(By.id('login')).click();
    await driver.wait(until.titleContains('Log in to continue'), 30000, 'Timed out after 30 seconds', 5000)
    await driver.findElement(By.id('password')).sendKeys('Testimio@231');
    await driver.findElement(By.id('login-submit')).click();
    
    await driver.wait(until.elementLocated(By.css("a[class='oTmCsFlPhDLGz2 AQ0dAIzWIJDFUU'] span[class='DD3DlImSMT6fgc']")), 30000, 'Timed out after 30 seconds', 5000);
    let trelloHomeTitle= await driver.getTitle();
    expect(await trelloHomeTitle).to.be.contains('Boards');
    
    await driver.findElement(By.css('.board-tile.mod-add')).click();
    await driver.findElement(By.xpath("//input[@type='text']")).sendKeys('New Board');
    await driver.wait(until.elementLocated(By.xpath("//button[contains(text(),'Create')]")), 30000, 'Timed out after 30 seconds', 5000);
    await driver.findElement(By.xpath("//button[contains(text(),'Create')]")).click();
    await driver.wait(until.elementLocated(By.xpath("(//*[contains(text(),'New Board')])[1]")), 30000, 'Timed out after 30 seconds', 5000);
    let trelloBoradTitle = await driver.findElement(By.xpath("(//*[contains(text(),'New Board')])[1]")).getText();
    expect(await trelloBoradTitle).to.be.contains('New Board');

    //Add List A and List B
    await driver.findElement(By.css("input[placeholder='Enter list title…']")).sendKeys('List A')
    await driver.findElement(By.css("input[value='Add list']")).click()
    await driver.findElement(By.css("input[placeholder='Enter list title…']")).sendKeys('List B')
    await driver.findElement(By.css("input[value='Add list']")).click()
    await driver.sleep(2000)

    //Add Card A in list A
    await driver.findElement(By.xpath("(//*[contains(text(),'Add a card')])[1]")).click();
    await driver.findElement(By.xpath("//textarea[@placeholder='Enter a title for this card…']")).sendKeys('Card A');
    await driver.findElement(By.css("input[value='Add card']")).click();
    await driver.sleep(2000)

    //Drag Card A from list A and drop it to list B
      const draggable = driver.findElement(By.css(".list-card.js-member-droppable.ui-droppable.ui-sortable-handle"));
      let start = await draggable.getRect();
      const droppable = await driver.findElement(By.xpath("(//*[contains(text(),'Add a card')])[2]"));
      await driver.actions().dragAndDrop(draggable, droppable).perform();
      console.log(`x co-ordinate of card is : ${start.x} and y co-ordinate of card is : ${start.y}`);
      await driver.sleep(10000)
      await driver.quit()
}

task()