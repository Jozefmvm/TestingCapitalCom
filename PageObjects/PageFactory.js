const { Header } = require('../PageObjects/PageComponents/Header');
const { Search } = require('../PageObjects/PageComponents/SearchComponent');
const { Cryptocurrencies } = require('../PageObjects/CryptocurrenciesPage');


class PageFactory {

    constructor(){

        this.header = new Header();
        this.Search = new Search();
        this.Cryptocurrencies = new Cryptocurrencies();
    }
}


module.exports = { PageFactory };
