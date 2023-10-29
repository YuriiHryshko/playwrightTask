const { Page } = require("./page");

const registrationLink = ".register";
const signInLink = ".login";
const userLoginLink = "#loggedas>.user";
const myAccountLink = "#account>ul>li>.my-account";
const signOutLink = "#account>ul>li>.logout";
const myPageLink = ".my-page";
const searchField = "#q";

class MainPage extends Page {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async clickSearchField() {
        await super.clickElement(searchField);
    }

    async clickSignInLink() {
        await super.clickElement(signInLink);
    }

    async clickRegistrationLink() {
        await super.clickElement(registrationLink);
    }

    async clickSingOutLink() {
        await super.clickElement(signOutLink);
    }

    async enterKeywordInSearchFild(keyword) {
        await super.addToFormInput(searchField, keyword);
    }

    async getSignInLinkElement() {
        return super.getElement(signInLink);
    }

    async getRegisterLinkElement() {
        return super.getElement(registrationLink);
    }

    async getUserLoginLinkElement() {
        return super.getElement(userLoginLink);
    }

    async getMyAccountLinkElement() {
        return super.getElement(myAccountLink);
    }

    async getSignOutLinkElement() {
        return super.getElement(signOutLink);
    }

    async getMyPageLinkElement() {
        return super.getElement(myPageLink);
    }

    async getSearchFieldElement() {
        return super.getElement(searchField);
    }

    async getSearchFieldValue() {
        return await super.getFormInputValue(searchField);
    }
}

module.exports = { MainPage };