import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {

    // beforeEach(() => {
    //     browser.refresh();
    // })

    it('user logs in with valid data',  () => {
        LoginPage.open();
        LoginPage.setLogin('nenobi3527@iludir.com');
        LoginPage.setPassword('t1875456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are empty', () => {
        LoginPage.open();
        LoginPage.submitButtonIsDisabled();
    });

    it('error toast pops up when invalid data provided', () => {
        LoginPage.open();
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppears();
    })
});


