## Summary of Repo

This repository contains automated tests for a web-site https://www.redmine.org/. The tests cover various scenarios and interactions with the application.

## Requirements

Before running the tests, you need to have the following software and dependencies installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Steps to Install

To install the project dependencies, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/YuriiHryshko/playwrightTask.git`
2. Navigate to the project folder: `cd playwrightTask`
3. Install the required dependencies: `npm install`

## Steps to Run Tests

You can run the tests with the following command:

`npm run test`

The command runs Playwright tests in different browsers (Chromium, Firefox, and WebKit), sets the environment variable to specify where Allure test results should be stored, and uses two reporters: the "line" reporter for basic textual output and the "allure-playwright" reporter for generating Allure report data in the specified directory.

## Steps to Generate Test Reports

After running the tests with the "test" script, you can use these scripts:

1. Generate an Allure test report: `npm run generate-allure-report`

2. View Allure test report in your browser: `npm run open-allure-report`

