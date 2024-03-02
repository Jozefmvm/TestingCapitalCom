const { Header } = require('../PageObjects/PageComponents/Header');
const { Search } = require('../PageObjects/PageComponents/SearchComponent');


class PageFactory {

    constructor(){

        this.header = new Header();
        this.Search = new Search();
    }
}


module.exports = { PageFactory };
