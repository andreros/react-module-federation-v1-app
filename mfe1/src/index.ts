/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */

/**
 * This file is responsible for bootstrapping this MFE in standalone (outside the host / orchestrator application)
 * recurring to the JavaScript IIFE below. The needed files are:
 * - app.tsx
 * - bootstrap.tsx
 * - index.ts (this file)
 *
 * This mechanism is only possible to be loaded thanks to the "bundle-loader" plugin declared in the "rules" chain
 * in the "webpack.config.js". For further information, please visit: https://www.npmjs.com/package/bundle-loader.
 *
 * After all the application bundling is made by Webpack, the "bundle-loader" will create an extra bundle, with its
 * entry point in the "bootstrap.tsx" file and execute it in the browser, through this "index.ts" file.
 */
import * as bootstrap from "./bootstrap";

(bootstrap as any)(() => {});
