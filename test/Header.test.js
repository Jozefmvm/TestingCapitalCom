const { PageFactory } = require('../PageObjects/PageFactory');
const pageFactory = new PageFactory();


describe ('Header testing', function() {

    before('Navigate to the site and maximize window', async () => {
        await pageFactory.header.navigate('https://capital.com/');
        await browser.setWindowSize(1920, 1080);
    })


    this.beforeEach('', async () =>{
        let variantOfLicence = [
                    {country: pageFactory.header.brazilCountry, language: pageFactory.header.languageEn, textCountry: 'Brazil'},
                    {country: pageFactory.header.spainCountry, language: pageFactory.header.languageEn, textCountry: 'Spain'},
                    {country: pageFactory.header.franceCountry, language: pageFactory.header.languageEn, textCountry: 'France'}
                ];for (const {country, language, textCountry} of variantOfLicence) {
                        await pageFactory.header.SelectCountryAndLanguage(country, language);
                        console.log(textCountry + ' OK');
                    }
    })



    it ('Should be appropriate link in browser line after change country to Brasil and licence text on page "https://capital.com/ru?country=br"', async () => {
        await pageFactory.header.SelectCountryAndLanguage(pageFactory.header.brazilCountry, pageFactory.header.languageEn);
        const title = await browser.getUrl();
        await pageFactory.header.ClickToElement(pageFactory.header.changeCountryAndLanguage);
        await expect(pageFactory.header.licence).toHaveText('(Regulated by SCB)');
        await expect(title).toEqual('https://capital.com/');
    })


    it ('Should be appropriate array size  hader on major page', async () => {
        const array = await pageFactory.header.allTabsFromHeader;
        await expect(array).toBeElementsArrayOfSize(5);
    })



    it ('Should be appropriate link in browser line after click on Education "https://capital.com/learn-to-trade"', async () => {
        await pageFactory.header.ClickToElement(pageFactory.header.educationLinkHeader);
        const title = await browser.getUrl();
        await expect(title).toEqual('https://capital.com/learn-to-trade');
    })


    // it('Parametrization', async () => {

    //     let variantOfLicence = [
    //         {country: pageFactory.header.brazilCountry, language: pageFactory.header.languageEn, textCountry: 'Brazil'},
    //         {country: pageFactory.header.spainCountry, language: pageFactory.header.languageEn, textCountry: 'Spain'},
    //         {country: pageFactory.header.franceCountry, language: pageFactory.header.languageEn, textCountry: 'France'}
    //     ];

    //     for (const {country, language, textCountry} of variantOfLicence) {
    //     await pageFactory.header.SelectCountryAndLanguage(country, language);
    //     const array = await pageFactory.header.allTabsFromHeader;
    //     await expect(array).toBeElementsArrayOfSize(5);

    //     console.log(textCountry + ' OK');
    //     }

    // });

    // const variantOfLicence = [
    //     {country: pageFactory.header.brazilCountry, language: pageFactory.header.languageEn},
    //     {country: pageFactory.header.spainCountry, language: pageFactory.header.languageEn}
    //   ];

    
    
    //     variantOfLicence.forEach( () => {
    //         it('addd', async () => {

    //             await pageFactory.header.SelectCountryAndLanguage(country, language);
    //         });
    //     })







})