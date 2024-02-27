const { PageFactory } = require('../PageObjects/PageFactory');
const pageFactory = new PageFactory();


describe ('Header testing', function() {

    before('Navigate to the site and maximize window', async () => {
        await pageFactory.header.navigate('https://capital.com/');
        await browser.setWindowSize(1920, 1080);
    })



    it ('Should be appropriate link in browser line after change country to Brasil "https://capital.com/ru?country=br"', async () => {
        await pageFactory.header.SelectCountry();
        const title = await browser.getUrl();
        await expect(title).toEqual('https://capital.com/ru?country=br');
    })


    it ('Should be appropriate link in browser line after change language to English "https://capital.com/"', async () => {
        await pageFactory.header.SelectLanguage();
        const title = await browser.getUrl();
        await expect(title).toEqual('https://capital.com/');
    })



    // it ('Should be appropriate link in browser line after click on logo "https://capital.com/"', async () => {
    //     await pageFactory.header.ClickToElement(pageFactory.header.logoLinkHeader);
    //     const title = await browser.getUrl();
    //     await expect(title).toEqual('https://capital.com/ru');
    // })


    // it ('Should be appropriate link in browser line after click on Education "https://capital.com/learn-to-trade"', async () => {
    //     await pageFactory.header.ClickToElement(pageFactory.header.educationLinkHeader);
    //     const title = await browser.getUrl();
    //     await expect(title).toEqual('https://capital.com/ru/learn-to-trade');
    // })








})