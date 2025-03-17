# Module Federation - Microfrontend

Microfrontend (module) application sample in React js using Webpack 5 and module federation.

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;
-   `DotEnv` to load project environment variables;

## Application Support and Tools

-   `Webpack` to bundle the application and serve it in development mode;

## Application Code Quality

-   `BiomeJS` for code formatting and linting;

## Application scripts

From the project root folder, please execute any of the following commands in a terminal window:

### Installation and application bootstrap

```bash
# install the application dependencies
npm i

# start the application in development mode
npm run dev

# build a version of the application for distribution
npm run build

# serve the built version from the `dist` folder
npm run serve

# reset and reinstall the application
npm run nuke
```

### Code Quality

```bash
# run BiomeJS
npm run lint

# run BiomeJS and fix all automatically fixable problems
npm run lint:fix
```
