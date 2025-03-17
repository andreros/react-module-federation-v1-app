# mbt-sample-orchestrator

Microfrontend host application sample in react js using webpack 5 and module federation.

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;
-   `Axios` to communicate with the backend API;
-   `DotEnv` to load project environment variables;

## Application Support and Tools

-   `Webpack` to bundle the application and serve it in development mode;
-   `husky` to automate git hooks;

## Application Code Quality

-   `ESLint` for code linting;
-   `Prettier` for code formatting;
-   `StyleLint` for style linting;
-   `CSpell` for code spell checking;

## Application Testing tools

-   `Jest` javascript testing framework;
-   `React Testing Library` testing framework for working with React components;

## Application scripts

From the project root folder, please execute any of the following commands in a terminal window:

### Installation and application bootstrap

```bash
# install the application dependencies
npm i

# start the application in development mode
npm start

# build a version of the application for distribution
npm run build

# serve the built version from the `dist` folder
npm run serve
```

### Code Quality

```bash
# run prettier automatic file formatter
npm run prettier-format-all

# run spell check over the code
npm run spell-check

# run ESLint
npm run lint

# run ESLint and fix all automatically fixable problems
npm run lint:fix

# run StyleLint
npm run lint:css

# run all the necessary commands before a code commit
npm run pre-commit
```

### Testing

```bash
# run the application unit tests
npm run test

# run the application unit tests in file watch mode
npm run test:watch

# run the application unit tests and present a code coverage report
npm run test:coverage
```
