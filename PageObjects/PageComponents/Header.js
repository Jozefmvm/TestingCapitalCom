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


    get nameCountry(){
        return $('//*[@class="js-analyticsClick" and @data-type="nav_country_belarus"]');
    }




    async ClickToElement(element) {
        await element.waitForClickable({ timeout: 5000 });
        await element.click()
    }


    async SelectCountry(){
        await this.changeCountryAndLanguage.click();
        await this.changeCountry.click();
        await this.nameCountry.click();
    }


}


module.exports = { Header };