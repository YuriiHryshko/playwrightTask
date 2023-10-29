class Page {
    /**
     *
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async getElement(element) {
        return await this.page.locator(element);
    }

    async clickElement(element) {
        await (await this.getElement(element)).click();
    }

    async addToFormInput(fieldLocator, textToAdd) {
        const field = await this.getElement(fieldLocator);
        await field.fill(textToAdd);
    }

    async getFormInputValue(fieldLocator) {
        const field = await this.getElement(fieldLocator);
        const value = await field.inputValue();
        return value;
    }

    async getMessageFieldText(messageField) {
        const field = await this.getElement(messageField);
        const value = await field.textContent();
        return value;
    }
}

module.exports = { Page };