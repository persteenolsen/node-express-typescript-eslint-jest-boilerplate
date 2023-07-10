## A Node.js Express App with TypeScript, Jest, Supertest, ESLint and Prettier

The Application was developed in a Node 14 environment

# Usage

For local development run the npm script by "npm run":

 - "dev": "nodemon ./src/index.ts"
 
To make a production build run the npm scrip by "npm run":

 -  "build": "tsc"
 
To start the production build locally run the npm script using "npm run":

 - "start": "node ./dist/index.js"

Jest and Supertest can be fired by running the npm script using "npm run":

 - "test": "jest --coverage"

Prettier can be fired by running the npm scripts using "npm run":

 - "pretty-fix": "prettier --write \"src/**/*.ts\"" 
 - "pretty": "prettier --check \"src/**/*.ts\""

Eslint can be fired by running the npm scripts using "npm run":

 Use the ESLint configuration by the section "eslintConfig" in package.json
 - "lint-b" : "eslint src/**/*.ts"
 - "lint-b-fix" : "eslint src/**/*.ts --fix"

Use the ESLint configuration by the eslintrc.json file
 - "lint-a" : "eslint  . --config eslintrc.json"
 - "lint-a-fix" : "eslint . --fix --config eslintrc.json"

Husky - still not implemented

# Features

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/ladjs/supertest#readme/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# Dependencies - NPM

- [express](https://www.npmjs.com/package/express/)

# devDependencies - NPM

- [typescript](https://www.npmjs.com/package/typescript/)
- [jest](https://www.npmjs.com/package/jest/)
- [supertest](https://www.npmjs.com/package/supertest/)
- [eslint](https://www.npmjs.com/package/eslint/)
- [prettier](https://www.npmjs.com/package/prettier/)
- [ts-node](https://www.npmjs.com/package/ts-node/)
- [ts-jest](https://www.npmjs.com/package/ts-jest/)
- [nodemon](https://www.npmjs.com/package/nodemon/)

Take a look at the package json for the @types NPM packages 
