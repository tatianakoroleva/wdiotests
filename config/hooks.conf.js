import LoginPage from '../test/pageobjects/login.page';
import ProfilePage from '../test/pageobjects/portal/profile.portal.page';
import { config } from 'dotenv';

module.exports = {
    before: async function (capabilities, specs) {
        config();
        browser.addCommand('login', async function (username, password) {
            await LoginPage.open();
            await LoginPage.setLogin(username);
            await LoginPage.setPassword(password);
            await LoginPage.clickSubmitButton();
            await ProfilePage.isOpen();
        })
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if(error){
            browser.takeScreenshot();
        }
    },

}
