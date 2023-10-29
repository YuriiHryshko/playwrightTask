const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/main.page");
const { LoginPage } = require("../pages/login.page");
const { SearchPage } = require("../pages/search.page");
const validKeywordData = require('../data/valid-keyword-data.json');
const validUserData = require('../data/valid-login-data.json');


test.describe("Main Page testing", () => {
    test.beforeEach(async({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    test("Header search by valid keyword", async({ page }) => {
        const searchPage = new SearchPage(page);
        const validKeyword = validKeywordData.validKeyword;
        const mainPage = new MainPage(page);

        await mainPage.clickSearchField();
        await expect(await mainPage.getSearchFieldElement()).toBeFocused();

        await mainPage.enterKeywordInSearchFild(validKeyword.keyword);
        await expect(await mainPage.getSearchFieldValue()).toEqual(validKeyword.keyword);

        await (await mainPage.getSearchFieldElement()).press("Enter");
        await expect(page.url()).toContain("/search");
        await expect(await searchPage.getSeachResultsAmount()).toBeGreaterThan(0);
    });
});

test.describe("Authenticated Main Page testing", () => {
    test.beforeEach(async({ page, baseURL }) => {
        const loginPage = new LoginPage(page);
        const validUser = validUserData.validUser;
        await page.goto(baseURL + "/login");
        await loginPage.login(validUser.login, validUser.password);
    });

    test("Logout", async({ page, baseURL }) => {
        const mainPage = new MainPage(page);
        await mainPage.clickSingOutLink();
        await page.waitForTimeout(1000);

        await expect(page.url()).toEqual(baseURL + "/");
        await expect(
            await (await mainPage.getSignInLinkElement()).isVisible()
        ).toBeTruthy();
        await expect(
            await (await mainPage.getRegisterLinkElement()).isVisible()
        ).toBeTruthy();
    });
});