const { PageFactory } = require('../PageObjects/PageFactory');
const pageFactory = new PageFactory();


describe ('Search component testing', function() {

    before('Navigate to the site and maximize window', async () => {
        await pageFactory.header.navigate('https://capital.com/');
        await browser.setWindowSize(1920, 1080);
        await pageFactory.header.acceptAllButton.click();
    })


    it ('Should be appropriate link in browser line after change country to Brasil and licence text on page "https://capital.com/ru?country=br"', async () => {
        await pageFactory.header.SelectCountryAndLanguage(pageFactory.header.brazilCountry, pageFactory.header.languageEn);
        const title = await browser.getUrl();
        await pageFactory.header.ClickToElement(pageFactory.header.changeCountryAndLanguage);
        await expect(pageFactory.header.licence).toHaveText('(Regulated by SCB)');
        await expect(title).toEqual('https://capital.com/');
    })

    
    it('Should be appropriate link in browser line after searching', async() =>{
        await pageFactory.Search.SearchSomething('Bitcoin');
        const title = await browser.getUrl();
        await expect(title).toEqual('https://capital.com/search');
        await expect(pageFactory.Search.globalSearchField).toHaveValue('Bitcoin');
    })

})