const { BasePage } = require('../BasePage');


class Login extends BasePage {


    
    get loginButtonHeader(){
        return $('[data-type="btn_header_login"]');
    }


    get signUpButtonHeader(){
        return $('[data-type="btn_header"]');
    }


    get emailFieldLogin(){
        return $('[name="email"]');
    }


    get passwordFieldLogin(){
        return $('[name="password"]');
    }


    get continueButtonLoginSign(){
        return $('[class="btn btn--md btn--wide l_btn"]');
    }


    get emailFieldSign(){
        return $('[id="s_overlay-email"] [class="field__control"]');
    }


    get passwordFieldSign(){
        return $('[id="s_overlay-pass"] [class="field__control"]');
    }



}

module.exports = { Login }