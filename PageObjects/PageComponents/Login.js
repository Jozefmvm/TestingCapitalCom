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

    await this.loginButtonHeader.waitForDisplayed({timeout:5000});
    await this.loginButtonHeader.click();
    await this.emailFieldLogin.waitForDisplayed({timeout:5000});
    await this.emailFieldLogin.setValue(email);
    await this.passwordFieldLogin.waitForDisplayed({timeout:5000});
    await this.passwordFieldLogin.setValue(password);
    await this.continueButtonLoginSign.waitForDisplayed({timeout:5000});
    await this.continueButtonLoginSign.click();
    

   }



}

module.exports = { Login }