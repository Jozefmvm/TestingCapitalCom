const { PageFactory } = require('../../PageObjects/PageFactory');
const pageFactory = new PageFactory();

describe ('US_01.06' , () => {
    
    
    before('Navigate to the site and maximize window', async () => {
        await pageFactory.header.navigate('https://capital.com/');
        await browser.setWindowSize(1920, 1080);
        await pageFactory.header.acceptAllButton.click();
        await pageFactory.header.SelectCountryAndLanguage(pageFactory.header.germanyCountry, pageFactory.header.languageDe);
    })


    it('US_01.06_De_Unregistered should be Sign Up form is opened',async() =>{
        await (pageFactory.header.marketsLinkHeader).moveTo( 845, 90);
        await pageFactory.header.ClickToElement(pageFactory.header.cryptocurrenciesMarketsHeader);
        await pageFactory.Cryptocurrencies.startTradingNowButton.click();
        await expect(pageFactory.Cryptocurrencies.singUpForm).toBeDisplayed();
    })


    it('US_01.06_De_Unregistered should be Login form is opened',async() =>{
        await pageFactory.Cryptocurrencies.loginLink.click();
        await expect(pageFactory.Cryptocurrencies.loginForm).toBeDisplayed();
    })


});