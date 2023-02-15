
export  class BasePage {
    

    private UIElement;
    private locator;
    constructor(locator:string) {
        this.locator = locator;
        this.UIElement = $(locator);
    }

    async click() {
        await (await this.UIElement).click();
    }
    async addValue(keys: string|number) {
        await (await this.UIElement).addValue(keys);
    }

    async getAttribute(attribute: string) {
        return await (await this.UIElement).getAttribute(attribute);
    }

    async getVisibleText() {
       
        return await (await this.UIElement).getText();
    }

    async waitForDisplayed(){
        return await (await this.UIElement).waitForDisplayed();
    }
    async waitForEnabled(){
        return await (await this.UIElement).waitForEnabled();
    }
    async isEnabled(){
        return await (await this.UIElement).isEnabled();
    }
    async isDisplayed(){
        return await (await this.UIElement).isDisplayed();
    }
    async dragAndDropTOElement(source:string,target:string){
        return await (await this.UIElement).isDisplayed();
    }
    async clearValue(){
        return await (await this.UIElement).clearValue();
    }
    async tapAction(xCoordinate:number,yCoordinate:number){
        return await driver.touchAction({
            action : 'tap',
            x : xCoordinate,
            y:yCoordinate
        })
    }
    async swipeLeft(xCoordinateFrom:number,yCoordinateFrom:number,xCoordinateTo:number,yCoordinateTo:number){
        return await driver.touchPerform([
            { action: 'press', options: { x: xCoordinateFrom, y: yCoordinateFrom }},
            { action: 'wait', options: { ms: 3000 }},
            { action: 'moveTo', options: { x: xCoordinateTo, y: yCoordinateTo }},
            { action: 'release' }
          ]);
    }
    
}
