const { BasePage } = require('../BasePage');


class Header extends BasePage {


    get logoLinkHeader() {
        return $('.gI.gCenter.gXs .cc-header__logo');
    }


    get educationLinkHeader() {
        return $('//*[@class="cc-nav__link cc-nav__link--lvl1 js-analyticsClick" and contains (text(), "Образование")]');
    }


    async ClickToElement(element) {
        await element.waitForClickable({ timeout: 5000 });
        await element.click()
    }
}


module.exports = { Header };