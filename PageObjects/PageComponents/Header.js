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
        return $('[class="grid gXs"] [data-type="nav_id65"]');
    }


    get changeCountryAndLanguage(){
        return $('[class*="licL"][class*="licLangSw__btn"]');
    }


    get changeCountry(){
        return $('[class*="fieldDropdown"][class="fieldDropdown__control fieldDropdown__control--hidden"]');
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


    get arabEmiratesCountry(){
        return $('[data-country="ae"]');
    }


    get germanyCountry(){
        return $('[data-country="de"]');
    }


    get australiaCountry(){
        return $('[data-country="au"]');
    }


    get argentinaCountry(){
        return $('[data-country="ar"]');
    }


    get languageEn(){
        return $('[class="iconMd flagMin flagMin--gb"]');
    }

    get languageDe(){
        return $('[class="iconMd flagMin flagMin--de"]');
    }


    get languageAr(){
        return $('[class="iconMd flagMin flagMin--ab"]');
    }


    get languageEl(){
        return $('[class="iconMd flagMin flagMin--gr"]');
    }


    get languageEs(){
        return $('[class="iconMd flagMin flagMin--es"]');
    }
    

    get languageFr(){
        return $('[class="iconMd flagMin flagMin--fr"]');
    }


    get languageIt(){
        return $('[class="iconMd flagMin flagMin--it"]');
    }


    get languageHu(){
        return $('[class="iconMd flagMin flagMin--hu"]');
    }


    get languageNl(){
        return $('[class="iconMd flagMin flagMin--nl"]');
    }


    get languagePl(){
        return $('[class="iconMd flagMin flagMin--pl"]');
    }


    get languageRo(){
        return $('[class="iconMd flagMin flagMin--ro"]');
    }


    get languageRu(){
        return $('[class="iconMd flagMin flagMin--ru"]');
    }


    get languageZn(){
        return $('[class="iconMd flagMin flagMin--zn"]');
    }

    get languageCn(){
        return $('[class="iconMd flagMin flagMin--cn"]');
    }


    get licence(){
        return $('#licenseMessageSpan');
    }


    get allTabsFromHeader(){
        return $$('[data-type="nav_id2"], [data-type="nav_id96"], [data-type="nav_id3"], [data-type="nav_id10"], [data-type="nav_id16"]');
    }


    get acceptAllButton(){
        return $('.banner-actions-container #onetrust-accept-btn-handler'); 
    }


    get currentCountry(){
        return $('small[class="js-currCountry"]');
    }


    get currentLanguage(){
        return $('[class="licLangSw__loc textLeft stringEllipsed js-currLang"]');
    }


    async GetCurrentLanguageText(){

        await this.currentLanguage.getText();
        
    }


    async CheckLicence() {
        
        await this.changeCountryAndLanguage.click()
          
    }


    async SelectCountryAndLanguage(country, language){

        await this.changeCountryAndLanguage.waitForDisplayed({timeout:10000});
        await this.changeCountryAndLanguage.click();
        await this.changeCountry.waitForDisplayed({timeout:10000});
        await this.changeCountry.click();
        await country.waitForClickable({timeout:10000})
        await country.click();
        await this.changeCountryAndLanguage.waitForClickable({timeout:10000})
        await this.changeCountryAndLanguage.click();
        await language.waitForClickable({timeout:10000})
        await language.click();
        
    }

    
    async GoToCryptocurrencies(){

        await this.marketsLinkHeader.waitForDisplayed({timeout:10000});
        await this.marketsLinkHeader.moveTo( 846, 59);
        await this.cryptocurrenciesMarketsHeader.waitForClickable({timeout:10000});
        await this.cryptocurrenciesMarketsHeader.click();
    
    }




}


module.exports = { Header };