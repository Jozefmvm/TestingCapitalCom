const {BasePage} = require('../PageObjects/BasePage');

class TradingPlatformPage extends BasePage {

    get themeSwitherTradingPlatform(){
        return $('[class="selection-theme ng-star-inserted"]');
    }


    get modalIcon(){
        return $('[class="iconex-close-small icon-square modal__header-btn"]');
    }


    async CloseModalIcon(){

      try { 
        await this.modalIcon.waitForExist({timeout:5000});
         if (this.modalIcon.isDisplayed()){
            this.modalIcon.click()
         }
        
      } catch (error) {
        console.log(`${error}`)
      }
    }
   
}

module.exports = { TradingPlatformPage };