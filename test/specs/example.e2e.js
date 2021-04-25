import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data',  () => {
        LoginPage.open();
        LoginPage.setLogin('nenobi3527@iludir.com');
        LoginPage.setPassword('t1875456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


