import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

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

    it('user logs in with valid data',  () => {
        LoginPage.setLogin('nenobi3527@iludir.com');
        LoginPage.setPassword('t1875456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are empty', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('error toast pops up when invalid data provided', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppears();
    });

    it('login input is required', () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    });
});


