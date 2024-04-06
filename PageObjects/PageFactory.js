const { Header } = require('../PageObjects/PageComponents/Header');
const { Search } = require('../PageObjects/PageComponents/SearchComponent');
const { Cryptocurrencies } = require('../PageObjects/CryptocurrenciesPage');
const { Login } = require('../PageObjects/PageComponents/Login');
const { TradingPlatformPage } = require('../PageObjects/TradingPlatformPage');


class PageFactory {

    constructor(){

        this.header = new Header();
        this.Search = new Search();
        this.Cryptocurrencies = new Cryptocurrencies();
        this.Login = new Login();
        this.TradingPlatformPage = new TradingPlatformPage();
    }
}


module.exports = { PageFactory };
