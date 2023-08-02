## A Node.js Express App with TypeScript, Jest, Supertest, ESLint and Prettier

The Boilerplate was developed in a Node 14 environment

This boilerplate serve as a starter for developing and testing 

# Usage

Installing

- Make sure you have a new version of Node installed
- Download the code by zip or fork
- Run the command "npm install" by the command promt

For local development run the npm script by "npm run dev":

 - "dev": "nodemon ./src/index.ts"
 
To make a production build run the npm scrip by "npm run build":

 -  "build": "tsc"
 
To start the production build locally run the npm script using "npm run start":

 - "start": "node ./dist/index.js"

Jest and Supertest can be fired by running the npm script using "npm run test":

 - "test": "jest --coverage"

Prettier can be fired by running the npm scripts using "npm run pretty-fix" and "npm run pretty":

 - "pretty-fix": "prettier --write \"src/**/*.ts\"" 
 - "pretty": "prettier --check \"src/**/*.ts\""

Eslint ( package.json ) can be fired by "npm run lint-b" and "npm run lint-b-fix":

 Use the ESLint configuration by the section "eslintConfig" in package.json
 - "lint-b" : "eslint src/**/*.ts"
 - "lint-b-fix" : "eslint src/**/*.ts --fix"
 
Eslint ( eslintrc.json ) can be fired by "npm run lint-a" and "npm run lint-a-fix":

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
