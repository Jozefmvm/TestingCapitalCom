const { PageFactory } = require('../../PageObjects/PageFactory');
const pageFactory = new PageFactory();
const allureReporter = require('@wdio/allure-reporter');




describe('US_01.06', () => {


    describe('Open homepage', () => {

        it('Navigate to the site and maximize window', async () => {
            await pageFactory.header.navigate('/');
            await pageFactory.header.acceptAllButton.click();
        })

    })

    let countries = ['Germany'/*,'Arab Emirates','Australia'*/];
    
    let licences = ['CYSEC',/*'SCB', 'ASIC'*/];

    let languages = ['English', 'Arabic', 'German', /*'Greek', 'Spanish', 'French', 'Italian', 'Hungarian', 'Dutch', 'Polish', 'Romanian', 
'Russian', 'New Zealand', 'Chinese'*/];


    for (let country of countries){
        for (let language of languages){

        describe (`US_01.06 | Markets > Menu item [Cryptocurrencies]`, () => {
            


            it (`Should be appropriate name of licence in browser line after change country to ${country} + ${language}`, async () => {
                
                let index = countries.indexOf(country)
                let index_lang = languages.indexOf(language)
                let variantOfLicence = [
                    {country: pageFactory.header.germanyCountry, language: pageFactory.header.languageEn},
                    {country: pageFactory.header.germanyCountry, language: pageFactory.header.languageAr},
                    {country: pageFactory.header.germanyCountry, language: pageFactory.header.languageDe},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageEl},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageEs},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageFr},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageIt},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageHu},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageNl},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languagePl},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageRo},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageRu},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageZn},
                    //{country: pageFactory.header.germanyCountry, language: pageFactory.header.languageCn},
                    //{country: pageFactory.header.arabEmiratesCountry, language: pageFactory.header.languageEn},
                    //{country: pageFactory.header.australiaCountry, language: pageFactory.header.languageEn}
                ];
                await pageFactory.header.SelectCountryAndLanguage(await variantOfLicence[index].country, await variantOfLicence[index_lang].language);
                await pageFactory.header.CheckLicence();
                await expect(pageFactory.header.licence).toHaveText(expect.stringContaining(licences[0]));
                
            })


            it(`US_01.06!00_01 ${country} + ${language} Unregistered user should be Sign Up form is opened after_Click button [Start Trading Now] `,async() =>{
                allureReporter.addFeature('Unregistered user');
                
                await pageFactory.header.GoToCryptocurrencies();
                await pageFactory.Cryptocurrencies.startTradingNowButton.click();
                await expect(pageFactory.Cryptocurrencies.singUpForm).toBeDisplayed();
                await pageFactory.Cryptocurrencies.closeSignFormButton.click();
                await pageFactory.header.logoLinkHeader.click()
                
            })


            it(`US_01.06!00_01 ${country} + ${language}  Authorized user should be The trading platform page is opened after_Click button [Start Trading Now] `,async() =>{
                allureReporter.addFeature('Authorized user');
                
                await pageFactory.Login.LoggingFunction(process.env.USEREMAIL, process.env.PASSWORD);
                await pageFactory.TradingPlatformPage.CloseModalIcon();
                await expect(pageFactory.TradingPlatformPage.themeSwitherTradingPlatform).toBeDisplayed();
                await pageFactory.Login.LogoutFunctionTrading();
            
            })


            it(`US_01.06!00_01 ${country} + ${language}  Unauthorized user should be Login form is opened`,async() =>{
                allureReporter.addFeature('Unauthorized user');
                
                await pageFactory.Login.LoggingFunction(process.env.USEREMAIL, process.env.PASSWORD);
                await pageFactory.TradingPlatformPage.CloseModalIcon();
                await pageFactory.Login.LogoutFunctionTrading();
                await pageFactory.header.GoToCryptocurrencies();
                await pageFactory.Cryptocurrencies.startTradingNowButton.click();
                await expect(pageFactory.Cryptocurrencies.singUpForm).toBeDisplayed();
                await pageFactory.Cryptocurrencies.closeSignFormButton.click();

            })



        })

    }
}
    
})
