import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#normal_login_email'); }
    get inputPassword() { return $('#normal_login_password'); }
    get btnSubmit() { return $('button[type="submit"]'); }

    async setLogin(email){
        await this.inputUsername.setValue(email);
    }
    async setPassword(password){
        await this.inputPassword.setValue(password);
    }

    async clickSubmitButton(){
        await this.btnSubmit.click();
    }

     open () {
        return super.open('/user/login');
    }
}

export default new LoginPage();
