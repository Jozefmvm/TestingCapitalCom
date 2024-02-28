const { BasePage } = require('../BasePage');


class Header extends BasePage {


    get logoLinkHeader() {
        return $('.gI.gCenter.gXs .cc-header__logo');
    }


    get educationLinkHeader() {
        return $('//*[@class="cc-nav__link cc-nav__link--lvl1 js-analyticsClick" and contains (text(), "Образование")]');
    }


    get changeCountryAndLanguage(){
        return $('.licLangSw__btn.gI.gCenter.gXs.js-licLangSwBtn.js-countries');
    }


    get changeCountry(){
        return $('.fieldDropdown__control.fieldDropdown__control--hidden');
    }

//it is necessary to improve
    get brazilCountry(){
        return $('//*[@class="gI gXs gCenter js-switchCountry" and @data-country="br"]');
    }
//it is necessary to improve
    get languageEn(){
        return $('//*[@class="js-langName" and contains (text(), "English")]');
    }


    get licence(){
        return $('#licenseMessageSpan');
    }


    async ClickToElement(element) {
        await element.waitForClickable({ timeout: 5000 });
        await element.click()
    }


    async SelectCountryAndLanguage(country, language){
        await this.changeCountryAndLanguage.click();
        await this.changeCountry.click();
        await country.waitForClickable({timeout:3000});
        await country.click();
        await this.changeCountryAndLanguage.click();
        await language.waitForClickable({timeout:3000});
        await language.click();
    }





}


module.exports = { Header };