const { Page } = require("./page");

const loginField = "#user_login";
const passwordField = "#user_password";
const confirmationField = "#user_password_confirmation";
const firstNameField = "#user_firstname";
const lastNameField = "#user_lastname";
const emailField = "#user_mail";
const submitButton = 'input[type="submit"]';
const errorExplanation = "#errorExplanation";

class RegistrationPage extends Page {
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

    async enterConfirmation(password) {
        await super.addToFormInput(confirmationField, password);
    }

    async enterFirstName(firstName) {
        await super.addToFormInput(firstNameField, firstName);
    }

    async enterLastName(lastName) {
        await super.addToFormInput(lastNameField, lastName);
    }

    async enterEmail(email) {
        await super.addToFormInput(emailField, email);
    }

    async getLoginFieldValue() {
        return await super.getFormInputValue(loginField);
    }

    async getPasswordFieldValue() {
        return await super.getFormInputValue(passwordField);
    }

    async getConfirmationFieldValue() {
        return await super.getFormInputValue(confirmationField);
    }

    async getFirstNameFieldValue() {
        return await super.getFormInputValue(firstNameField);
    }

    async getLastNameFieldValue() {
        return await super.getFormInputValue(lastNameField);
    }

    async getEmailFieldValue() {
        return await super.getFormInputValue(emailField);
    }

    async getErrorExplanationText() {
        return await super.getMessageFieldText(errorExplanation);
    }

    async clickSubmitButton() {
        await super.clickElement(submitButton);
    }

    async getPasswordFieldElement() {
        return super.getElement(passwordField);
    }

    async getConfirmationFieldElement() {
        return super.getElement(confirmationField);
    }
}

module.exports = { RegistrationPage };