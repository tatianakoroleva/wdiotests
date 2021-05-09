import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {

    // beforeEach(() => {
    //     browser.refresh();
    // });

    beforeEach(() => {
       LoginPage.open();
    });

    // afterEach(() => {
    //     browser.execute('window.localStorage.clear()')
    // });

    it('user logs in with valid data',  async () => {
        await LoginPage.setLogin(process.env.LOGIN);
        await LoginPage.setPassword(process.env.PASSWORD);
        await LoginPage.clickSubmitButton();
        await ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are empty', async () => {
        await LoginPage.submitButtonIsDisabled();
    });

    it('error toast pops up when invalid data provided', async () => {
        await LoginPage.setLogin('example@example.com');
        await LoginPage.setPassword('123456');
        await LoginPage.clickSubmitButton();
        await LoginPage.errorToastAppears();
    });

    it('login input is required', async () => {
        await LoginPage.setLogin('example');
        await LoginPage.emptyLoginInput();
        await LoginPage.loginRequiredError();
    });
});


