const { test, expect } = require("@playwright/test");
const { MainPage } = require("../pages/main.page");
const { RegistrationPage } = require("../pages/registration.page");
const { LoginPage } = require("../pages/login.page");
import { faker } from '@faker-js/faker';

const randomLogin = faker.internet.userName();
const randomPassword = faker.internet.password();
const randomFirstName = faker.person.firstName();
const randonLastName = faker.person.lastName();
const randonEmail = faker.internet.email();


test.describe("Registration Page testing", () => {
    test.beforeEach(async({ page, baseURL }) => {
        await page.goto(baseURL);
    });

    test("Registration with valid data in main filds", async({ page }) => {
        await test.step("Click the registration link", async() => {
            const mainPage = new MainPage(page);
            await mainPage.clickRegistrationLink();
            await expect(page.url()).toContain("/register");
        });

        await test.step("Enter login information", async() => {
            const registrationPage = new RegistrationPage(page);

            await registrationPage.enterLogin(randomLogin);
            await expect(await registrationPage.getLoginFieldValue()).toEqual(randomLogin);

            await registrationPage.enterPassword(randomPassword);
            await expect(await registrationPage.getPasswordFieldValue()).toEqual(randomPassword);
            await expect(
                await (await registrationPage.getPasswordFieldElement()).getAttribute("type")
            ).toEqual("password");

            await registrationPage.enterConfirmation(randomPassword);
            await expect(await registrationPage.getConfirmationFieldValue()).toEqual(randomPassword);
            await expect(
                await (await registrationPage.getConfirmationFieldElement()).getAttribute("type")
            ).toEqual("password");
        });

        await test.step("Enter personal information", async() => {
            const registrationPage = new RegistrationPage(page);

            await registrationPage.enterFirstName(randomFirstName);
            await expect(await registrationPage.getFirstNameFieldValue()).toEqual(randomFirstName);

            await registrationPage.enterLastName(randonLastName);
            await expect(await registrationPage.getLastNameFieldValue()).toEqual(randonLastName);

            await registrationPage.enterEmail(randonEmail);
            await expect(await registrationPage.getEmailFieldValue()).toEqual(randonEmail);
        });

        await test.step("Submit the registration form", async() => {
            const registrationPage = new RegistrationPage(page);
            const loginPage = new LoginPage(page);

            await registrationPage.clickSubmitButton();
            await expect(page.url()).toContain("/login");

            await expect(await loginPage.getResultNoticeText()).toEqual(
                "Account was successfully created. An email containing the instructions to activate your account was sent to " +
                randonEmail +
                "."
            );
        });
    });

    test("Registration with empty filds", async({ page }) => {
        const mainPage = new MainPage(page);
        const registrationPage = new RegistrationPage(page);

        await mainPage.clickRegistrationLink();
        await expect(page.url()).toContain("/register");

        await registrationPage.clickSubmitButton();

        const errorMessage = await registrationPage.getErrorExplanationText();
        const expectedErrorMessages = [
            "Email cannot be blank",
            "Login cannot be blank",
            "First name cannot be blank",
            "Last name cannot be blank",
            "Password is too short (minimum is 8 characters)",
        ];

        await Promise.all(expectedErrorMessages.map(message => {
            return expect(errorMessage).toContain(message);
        }));
    });
});