const { BasePage } = require('../PageObjects/BasePage');

class Cryptocurrencies extends BasePage {
    


    get startTradingNowButton(){
        return $('.button-main.rounded-lg.js_signup.js-analyticsVisible');
    }


    get singUpForm(){
        return $('[class="signup-form"]');
    }

    


}

module.exports = {Cryptocurrencies};