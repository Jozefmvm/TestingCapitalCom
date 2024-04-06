const {BasePage} = require('../PageObjects/BasePage');

class TradingPlatformPage extends BasePage {

    get themeSwitherTradingPlatform(){
        return $('[class="selection-theme ng-star-inserted"]');
    }
   
}

module.exports = { TradingPlatformPage };