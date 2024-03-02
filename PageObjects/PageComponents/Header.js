const { BasePage } = require('../BasePage');


class Header extends BasePage {


    get logoLinkHeader() {
        return $('.gI.gCenter.gXs .cc-header__logo');
    }


    get educationLinkHeader() {
        return $('[data-type="nav_id96"]');
    }


    get changeCountryAndLanguage(){
        return $('[class="licLangSw__btn gI gCenter gXs js-licLangSwBtn js-countries"]');
    }


    get changeCountry(){
        return $('.fieldDropdown__control.fieldDropdown__control--hidden');
    }

//it is necessary to improve
    get brazilCountry(){
        return $('[data-country="br"]');
    }
//it is necessary to improve
    get languageEn(){
        return $('[class="iconMd flagMin flagMin--gb"]');
    }

    get languageRu(){
        return $('[class="iconMd flagMin flagMin--ru"]')
    }


    get licence(){
        return $('#licenseMessageSpan');
    }


    get allTabsFromHeader(){
        return $$('[data-type="nav_id2"], [data-type="nav_id96"], [data-type="nav_id3"], [data-type="nav_id10"], [data-type="nav_id16"]');
    }

    get allCountries(){
        return $$('[class="gI gXs gCenter js-switchCountry"]');
    }


    async ClickToElement(element) {
        await element.waitForClickable({ timeout: 5000 });
        await element.click()
    }


    async SelectCountryAndLanguage(country, language){
        await this.changeCountryAndLanguage.waitForClickable({ timeout:5000 });
        await this.changeCountryAndLanguage.click();
        await this.changeCountry.waitForClickable({ timeout:5000 });
        await this.changeCountry.click()
        await country.waitForClickable({ timeout:5000 });
        await country.click();
        await this.changeCountryAndLanguage.waitForClickable({ timeout:5000 });
        await this.changeCountryAndLanguage.click()
        await language.waitForClickable({ timeout:5000 });
        await language.click();
    }





}


module.exports = { Header };