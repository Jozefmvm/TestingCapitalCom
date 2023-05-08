const { Header } = require('../PageObjects/PageComponents/Header');


class PageFactory {

    constructor(){

        this.header = new Header();
    }
}


module.exports = { PageFactory }
