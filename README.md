# Senior QA Automation Engineer Challenge

Automated solution for the Senior QA Automation Engineer challenge using Playwright and JavaScript.

## Objective

This test performs a combined UI and API validation:

1. Opens `https://demoqa.com/text-box`
2. Fills the form with the required values
3. Submits the form
4. Validates that the output section displays the submitted values correctly
5. Sends a GET request to `https://jsonplaceholder.typicode.com/posts/1`
6. Validates that:
   - The response status is `200`
   - The JSON contains `userId`, `id`, `title`, and `body`
   - The `id` field equals `1`
7. Prints exactly `All tests passed.` when every validation passes

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Prerequisites

Install Node.js before running the project.

Recommended version: Node.js 18 or higher.

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

## Run the Test

```bash
npm test
```

Or:

```bash
npx playwright test
```

> Note: Playwright runs in headless mode by default, so the browser window will not appear when using `npm test`.

## Run in Headed Mode

```bash
npm run test:headed
```

This opens the browser UI so you can watch the test run.

## View HTML Report

After running the test, use:

```bash
npm run report
```

## Project Structure

```text
.
├── README.md
├── package.json
├── playwright.config.js
└── tests
    └── form-and-api.spec.js
```

## Notes

The test keeps the UI and API validations inside one Playwright test, as requested by the challenge. Assertions include clear messages to make failures easier to understand.
