const { Page } = require("./page");

const amountOfSearchResults = "#content>h3";

class SearchPage extends Page {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async getSeachResultsAmount() {
        const text = await super.getMessageFieldText(amountOfSearchResults);
        const regex = /\((\d+)\)/;
        const match = text.match(regex);
        if (match) {
            const numberFromText = parseInt(match[1], 10);
            return numberFromText;
        }
        return 0;
    }
}

module.exports = { SearchPage };