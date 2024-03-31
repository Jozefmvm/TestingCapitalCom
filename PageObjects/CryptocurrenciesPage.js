const { BasePage } = require('../PageObjects/BasePage');

class Cryptocurrencies extends BasePage {
    


    get startTradingNowButton(){
        return $('.button-main.rounded-lg.js_signup.js-analyticsVisible');
    }


    get singUpForm(){
        return $('[class="signup-form "]');
    }


    get loginLink(){
        return $('.signup-form .l_btn_signup');
    }


    get loginForm(){
        return $('[class="step0 "]');
    }


    get checkBoxOnLoginForm(){
        return $('.field .checkbox');
    }


    get closeSignFormButton(){
        return $('[class="button-cleared small s_cancel"]');
    }


    get closeLoginFormButton(){
        return $('[class="button-cleared small l_cancel"]');
    }



}

module.exports = {Cryptocurrencies};