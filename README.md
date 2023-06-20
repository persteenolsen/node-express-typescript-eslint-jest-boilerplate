## A Node.js Express App with TypeScript, Jest, Supertest, ESLint and Prettier

The Application was developed in a Node 14 environment

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

