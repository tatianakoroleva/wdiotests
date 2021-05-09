import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#normal_login_email'); }
    get inputPassword() { return $('#normal_login_password'); }
    get btnSubmit() { return $('button[type="submit"]'); }
    get errorToast() {return $('.ant-notification-notice-message'); }
    get errorLoginRequired() {return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');}

    async open () {
        return super.open('/user/login');
    }

    async setLogin(email){
        return (await this.inputUsername).setValue(email);
    }
    async setPassword(password){
        return (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton(){
         return (await this.btnSubmit).click();
    }

    async submitButtonIsDisabled(){
        return expect(this.btnSubmit).toBeDisabled();
    }

    async errorToastAppears(){
        return expect(this.errorToast).toBeDisplayed();
    }

    async emptyLoginInput(){
        return this.clearInput(await this.inputUsername);
    }

    async loginRequiredError(){
        await expect(this.errorLoginRequired).toBeDisplayed();
        await expect(this.errorLoginRequired).toHaveText('Required');
    }

  }

export default new LoginPage();
