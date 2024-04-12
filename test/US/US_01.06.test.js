const { PageFactory } = require('../../PageObjects/PageFactory');
const pageFactory = new PageFactory();




describe('US_01.06', () => {


    describe('Open homepage', () => {

        it('Navigate to the site and maximize window', async () => {
            await pageFactory.header.navigate('/');
            await pageFactory.header.acceptAllButton.click();
        })

    })

    let countries = ['Germany','Arab Emirates','Australia']
    let licences = ['Cyprus / EU (Regulated by CYSEC)','(Regulated by SCB)', 'Australia (Regulated by ASIC)']

    for (let country of countries){

        describe (`US_01.06 - ${country}`, () => {


            it (`Should be appropriate name of licence in browser line after change country to ${country}`, async () => {
                let index = countries.indexOf(country)
                let variantOfLicence = [
                    {country: pageFactory.header.germanyCountry, language: pageFactory.header.languageEn},
                    {country: pageFactory.header.arabEmiratesCountry, language: pageFactory.header.languageEn},
                    {country: pageFactory.header.australiaCountry, language: pageFactory.header.languageEn}
                ];
                await pageFactory.header.SelectCountryAndLanguage(await variantOfLicence[index].country, await variantOfLicence[index].language);
                await pageFactory.header.ClickToElement(pageFactory.header.changeCountryAndLanguage);
                await expect(pageFactory.header.licence).toHaveText(licences[index]);
            })


            it(`US_01.06!00_01 ${country} Unregistered user should be Sign Up form is opened after_Click button [Start Trading Now] `,async() =>{

                await pageFactory.header.GoToCryptocurrencies();
                await pageFactory.Cryptocurrencies.startTradingNowButton.click();
                await expect(pageFactory.Cryptocurrencies.singUpForm).toBeDisplayed();
                await pageFactory.Cryptocurrencies.closeSignFormButton.click();
                await pageFactory.header.logoLinkHeader.click()
                
            })


            it(`US_01.06!00_01 ${country} Authorized user should be The trading platform page is opened after_Click button [Start Trading Now] `,async() =>{

                await pageFactory.Login.LoggingFunction('murvitalymvm@gmail.com', '01198925Capital!');
                await pageFactory.TradingPlatformPage.CloseModalIcon();
                await expect(pageFactory.TradingPlatformPage.themeSwitherTradingPlatform).toBeDisplayed();
                await pageFactory.Login.LogoutFunctionTrading();
            
            })


            it(`US_01.06!00_01 ${country} Unauthorized user should be Login form is opened`,async() =>{

                await pageFactory.Login.LoggingFunction('murvitalymvm@gmail.com', '01198925Capital!');
                await pageFactory.TradingPlatformPage.CloseModalIcon();
                await pageFactory.Login.LogoutFunctionTrading();
                await pageFactory.header.GoToCryptocurrencies();
                await pageFactory.Cryptocurrencies.startTradingNowButton.click();
                await expect(pageFactory.Cryptocurrencies.singUpForm).toBeDisplayed();
                await pageFactory.Cryptocurrencies.closeSignFormButton.click();

            })


            // it(`US_01.06 ${country} log`,async() =>{
            //     await pageFactory.Login.LoggingFunction('murvitalymvm@gmail.com', '01198925Capital!');
            //     //await pageFactory.Login.closeButtonLoginForm.click();
            //     await expect (pageFactory.TradingPlatformPage.themeSwitherTradingPlatform).toBeDisplayed();
            //     await pageFactory.Login.LogoutFunction();


            // })


        })

    }
    
})
