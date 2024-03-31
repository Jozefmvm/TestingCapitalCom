const { PageFactory } = require('../PageObjects/PageFactory');
const pageFactory = new PageFactory();



describe('Capital', () => {


    describe('Open homepage', () => {

        it('Navigate to the site and maximize window', async () => {
            await pageFactory.header.navigate('/');
            await pageFactory.header.acceptAllButton.click();
        })

    })

    let countries = ['Brazil','Spain','France']
    let licences = ['(Regulated by SCB)','Cyprus / EU (Regulated by CYSEC)', 'Cyprus / EU (Regulated by CYSEC)']

    for (let country of countries){

        describe (`Header testing - ${country}`, () => {

            it (`Should be appropriate name of licence in browser line after change country to ${country}`, async () => {
                let index = countries.indexOf(country)
                let variantOfLicence = [
                    {country: pageFactory.header.brazilCountry, language: pageFactory.header.languageEn},
                    {country: pageFactory.header.spainCountry, language: pageFactory.header.languageEn},
                    {country: pageFactory.header.franceCountry, language: pageFactory.header.languageEn}
                ];
                await pageFactory.header.SelectCountryAndLanguage(await variantOfLicence[index].country, await variantOfLicence[index].language);
                await pageFactory.header.ClickToElement(pageFactory.header.changeCountryAndLanguage);
                await expect(pageFactory.header.licence).toHaveText(licences[index]);
            })

            it ('Should be appropriate array size  header on major page', async () => {
                const array = await pageFactory.header.allTabsFromHeader;
                await expect(array).toBeElementsArrayOfSize(5);
            })

            it ('Should be appropriate logo no page', async () => {
                await pageFactory.header.ClickToElement(pageFactory.header.educationLinkHeader);
                await expect(pageFactory.header.logoLinkHeader).toBeDisplayed();
            })

        })
    }
})
