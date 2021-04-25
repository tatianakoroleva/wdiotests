import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#normal_login_email'); }
    get inputPassword() { return $('#normal_login_password'); }
    get btnSubmit() { return $('button[type="submit"]'); }
    get errorToast() {return $('.ant-notification-notice-message')}

    open () {
        return super.open('/user/login');
    }

    async setLogin(email){
        await this.inputUsername.setValue(email);
    }
    async setPassword(password){
        await this.inputPassword.setValue(password);
    }

    async clickSubmitButton(){
        await this.btnSubmit.click();
    }

    submitButtonIsDisabled(){
        expect(this.btnSubmit).toBeDisabled();
    }

    errorToastAppears(){
        expect(this.errorToast).toBeDisplayed();
    }

  }

export default new LoginPage();
