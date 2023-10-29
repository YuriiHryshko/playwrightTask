## Summary of Repo

This repository contains automated tests for a web-site https://www.redmine.org/. The tests cover various scenarios and interactions with the application.

## Requirements

Before running the tests, you need to have the following software and dependencies installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Steps to Install

To install the project dependencies, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/yourusername/playwright-test-project.git`
2. Navigate to the project folder: `cd playwright-test-project`
3. Install the required dependencies: `npm install`

## Steps to Run Tests

You can run the tests with the following command:

`npx playwright test`

This command will execute all the tests in different browsers (Chromium, Firefox, and WebKit).

## Steps to Generate Test Reports

To generate test reports and view the results, you can use Playwright's built-in reporters. Run the tests with the --reporter flag, specifying the desired reporter. For example, to generate an HTML report, use:

`npx playwright test --reporter=html`

You will find the generated report in the test-results folder.

