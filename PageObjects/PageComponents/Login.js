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


    get closeButtonLoginForm(){
        return $('[class="button-cleared small l_cancel"]');
    }


    get emailFieldSign(){
        return $('[id="s_overlay-email"] [class="field__control"]');
    }


    get passwordFieldSign(){
        return $('[id="s_overlay-pass"] [class="field__control"]');
    }


   async LoggingFunction(email, password){

    this.loginButtonHeader.waitForExist({timeout:5000});
    this.loginButtonHeader.click();
    this.emailFieldLogin.waitForExist({timeout:5000});
    this.emailFieldLogin.setValue(email);
    this.passwordFieldLogin.waitForExist({timeout:5000});
    this.passwordFieldLogin.setValue(password);
    this.continueButtonLoginSign.waitForExist({timeout:5000});
    this.continueButtonLoginSign.click();
    

   }



}

module.exports = { Login }