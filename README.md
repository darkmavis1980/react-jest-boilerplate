# Simple boilerplate with React, Webpack, Jest and Sass support

This is a very basic boilerplate with support for:

* ReactJS
* React Router
* Jest & Enzyme (unit tests)
* Webpack 4 (module bundler)
* Babel 7+
* ESLint with Airbnb standards

### Install it

Just run `npm install` to install the dependencies.

### Run it

For active development you should run it with the following commands:

```bash
# Run it with watcher, so the process stays alive and it rerenders the page every time you apply a change to the code
npm run start:dev

# Run it once and generate the code in the dist folder
npm run start
```

### Run the unit tests

This repository comes with Jest unit testing library with Enzyme, for React support, it also includes coverage report with Instanbul that can be found in the `coverage` folder.

```bash
# You can run Jest with a watcher, so it updates when the code changes
npm run test:watch

# Run it once
npm run test 
# or 
npm test

# Run the coverage
npm run coverage
```

### Create the build

Running the following command:

```bash
npm build
```

It will generate the dist folder with the minified code and vendor packages.