const { BasePage } = require('../BasePage')

class Search extends BasePage{


    get searchButton(){
        return $('#headerSearch');
    }

    get clouseSearchButton(){
        return $('.cc-search__close.hdrIcon.js-searchClose');
    }

    get globalSearchField(){
        return $('.global-search__input.sp-fld');
    }

    async SearchSomething(value){
        
        await this.searchButton.waitForClickable({timeout:3000});
        await this.searchButton.click();
        await this.searchButton.setValue(value);
        await this.searchButton.waitForClickable({timeout:3000});
        await browser.keys('Enter');
    }

}

module.exports = {Search};