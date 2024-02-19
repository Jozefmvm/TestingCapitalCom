const { PageFactory } = require('../PageObjects/PageFactory');
const pageFactory = new PageFactory();


describe ('Header testing', function() {

    before('Navigate to the site and maximize window', async () => {
        await pageFactory.header.navigate('https://capital.com/');
        await browser.setWindowSize(1920, 1080);
    })


    it ('Should be appropriate link in browser line after click on logo "https://capital.com/"', async () => {
        await pageFactory.header.ClickToElement(pageFactory.header.logoLinkHeader);
        const title = await browser.getUrl();
        await expect(title).toEqual('https://capital.com/by');
    })


    it ('Should be appropriate link in browser line after click on Education "https://capital.com/learn-to-trade"', async () => {
        await pageFactory.header.ClickToElement(pageFactory.header.educationLinkHeader);
        const title = await browser.getUrl();
        await expect(title).toEqual('https://capital.com/ru/learn-to-trade');
    })







})