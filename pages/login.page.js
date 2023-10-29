const { Page } = require("./page");

const loginField = "input#username";
const passwordField = "#password";
const loginButton = "#login-submit";
const resultNotice = "#flash_notice";

class LoginPage extends Page {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async enterLogin(login) {
        await super.addToFormInput(loginField, login);
    }

    async enterPassword(password) {
        await super.addToFormInput(passwordField, password);
    }

    async getLoginFieldValue() {
        return await super.getFormInputValue(loginField);
    }

    async getPasswordFieldValue() {
        return await super.getFormInputValue(passwordField);
    }

    async clickLoginButton() {
        await super.clickElement(loginButton);
    }

    async getPasswordFieldElement() {
        return super.getElement(passwordField);
    }

    async getResultNoticeText() {
        return await super.getMessageFieldText(resultNotice);
    }

    async login(login, password) {
        await this.enterLogin(login);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

module.exports = { LoginPage };