// const { PageFactory } = require('../PageObjects/PageFactory');
// const pageFactory = new PageFactory();



// describe('Capital', () => {


//     describe('Open homepage', () => {

//         it('Navigate to the site and maximize window', async () => {
//             await pageFactory.header.navigate('/');
//             await pageFactory.header.acceptAllButton.click();
//         })

//     })

//     let countries = ['Germanyl','United Arab Emirates','Australia']
//     let licences = ['Cyprus / EU (Regulated by CYSEC)','(Regulated by SCB)', 'Australia (Regulated by ASIC)']

//     for (let country of countries){

//         describe (`Header testing - ${country}`, () => {

//             it (`Should be appropriate name of licence in browser line after change country to ${country}`, async () => {
//                 let index = countries.indexOf(country)
//                 let variantOfLicence = [
//                     {country: pageFactory.header.germanyCountry, language: pageFactory.header.languageEn},
//                     {country: pageFactory.header.arabEmiratesCountry, language: pageFactory.header.languageEn},
//                     {country: pageFactory.header.australiaCountry, language: pageFactory.header.languageEn}
//                 ];
//                 await pageFactory.header.SelectCountryAndLanguage(await variantOfLicence[index].country, await variantOfLicence[index].language);
//                 await pageFactory.header.ClickToElement(pageFactory.header.changeCountryAndLanguage);
//                 await expect(pageFactory.header.licence).toHaveText(licences[index]);
//             })

//             it ('Should be appropriate array size  header on major page', async () => {
//                 const array = await pageFactory.header.allTabsFromHeader;
//                 await expect(array).toBeElementsArrayOfSize(5);
//             })

//             it ('Should be appropriate logo no page', async () => {
//                 await pageFactory.header.ClickToElement(pageFactory.header.educationLinkHeader);
//                 await expect(pageFactory.header.logoLinkHeader).toBeDisplayed();
//             })

//         })
//     }
// })
