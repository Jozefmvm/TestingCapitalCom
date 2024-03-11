const { BasePage } = require('../BasePage');


class Header extends BasePage {


    get logoLinkHeader() {
        return $('.gI.gCenter.gXs .cc-header__logo');
    }


    get educationLinkHeader() {
        return $('[data-type="nav_id96"]');
    }


    get marketsLinkHeader(){
        return $('[data-type="nav_id3"]');
    }


    get cryptocurrenciesMarketsHeader(){
        return $('[data-type="nav_id65"]');
    }


    get changeCountryAndLanguage(){
        return $('.licLangSw.js-licLangSw .licLangSw__btn.gI.gCenter.gXs.js-licLangSwBtn.js-countries');
    }


    get changeCountry(){
        return $('.fieldDropdown.fieldDropdown--filter.fieldDropdown--lg.js-fieldDropdownFilter');
    }


    get brazilCountry(){
        return $('[data-country="br"]');
    }


    get spainCountry(){
        return $('[data-country="es"]');
    }


    get franceCountry(){
        return $('[data-country="fr"]');
    }


    get unitedKingdomCoutry(){
        return $('[data-country="gb"]');
    }


    get languageEn(){
        return $('[data-type="nav_lang_en"]');
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


    async ClickToElement(element) {
        await element.waitForClickable({ timeout: 5000 });
        await element.click()
    }


    async SelectCountryAndLanguage(country, language){
        await this.changeCountryAndLanguage.waitForClickable({ timeout: 5000 });
        await this.changeCountryAndLanguage.click();
        await this.changeCountry.waitForClickable({ timeout: 5000 });
        await this.changeCountry.click();
        await country.waitForClickable({ timeout:5000 });
        await country.click();
        await this.changeCountryAndLanguage.waitForClickable({ timeout:5000 });
        await this.changeCountryAndLanguage.click();
        await language.waitForClickable({ timeout: 5000 });
        await language.click();
    }

    // async fastSelect(country, language){
    //     await this.changeCountryAndLanguage.click()
    //     await this.changeCountry.click()
    //     await country.click()
    //     await this.changeCountryAndLanguage.click()
    //     await this.changeCountry.click()
    //     await language.click()
    // }





}


module.exports = { Header };