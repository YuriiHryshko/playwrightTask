const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/main.page");
const { LoginPage } = require("../pages/login.page");
const validUserData = require('../data/valid-login-data.json');

test.describe("Login Page testing", () => {
    test.beforeEach(async({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    test("Login with valid data", async({ page, baseURL }) => {
        const mainPage = new MainPage(page);
        const loginPage = new LoginPage(page);
        const validUser = validUserData.validUser;

        await mainPage.clickSignInLink();
        await expect(page.url()).toContain("/login");

        await loginPage.enterLogin(validUser.login);
        await expect(await loginPage.getLoginFieldValue()).toEqual(validUser.login);

        await loginPage.enterPassword(validUser.password);
        await expect(await loginPage.getPasswordFieldValue()).toEqual(validUser.password);
        await expect(
            await (await loginPage.getPasswordFieldElement()).getAttribute("type")
        ).toEqual("password");

        await loginPage.clickLoginButton();
        await page.waitForTimeout(1000);

        await expect(page.url()).toEqual(baseURL + "/");
        await expect(
            await (await mainPage.getUserLoginLinkElement()).isVisible()
        ).toBeTruthy();
        await expect(
            await (await mainPage.getMyAccountLinkElement()).isVisible()
        ).toBeTruthy();
        await expect(
            await (await mainPage.getSignOutLinkElement()).isVisible()
        ).toBeTruthy();
        await expect(
            await (await mainPage.getMyPageLinkElement()).isVisible()
        ).toBeTruthy();
    });
});