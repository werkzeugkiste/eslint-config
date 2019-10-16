# @werkzeugkiste/eslint-config <img src="https://raw.githubusercontent.com/werkzeugkiste/eslint-config/master/eslint.svg?sanitize=true" height="40" align="right">

A shared [ESLint](https://eslint.org) config for [@werkzeugkiste](https://www.github.com/werkzeugkiste). Rules are carefully selected to be as restrictive as necessary but no more. This config aims to reduce bugs and cause as much consistency as possible in a codebase while keeping the code readable even for not-so-experienced developers.

## Installation

Get started by running this command in the root of your project:

```sh
yarn add --dev eslint @werkzeugkiste/eslint-config
```

```sh
npm install --save-dev eslint @werkzeugkiste/eslint-config
```

Afterwards install all `peerDependencies` into your project:

```sh
npx install-peerdeps --dev @werkzeugkiste/eslint-config
```

<!--
why is that necessary?
https://github.com/eslint/eslint/issues/2518
https://github.com/eslint/eslint/issues/3458#issuecomment-133071869
-->

Then add an `.eslintrc.json` file with the following content to the root of your project:

```json
{
  "extends": ["@werkzeugkiste"]
}
```

Optionally you can also add linting for React/JSX:

```json
{
  "extends": ["@werkzeugkiste", "@werkzeugkiste/eslint-config/react"]
}
```

Add linting for Node.js:

```json
{
  "extends": ["@werkzeugkiste", "@werkzeugkiste/eslint-config/node"]
}
```

If you want to use TypeScript, that's fine:

```json
{
  "extends": ["@werkzeugkiste", "@werkzeugkiste/eslint-config/typescript"]
}
```

Or use them all at once:

```json
{
  "extends": [
    "@werkzeugkiste",
    "@werkzeugkiste/eslint-config/react",
    "@werkzeugkiste/eslint-config/node",
    "@werkzeugkiste/eslint-config/typescript"
  ]
}
```

For more information see: http://eslint.org/docs/user-guide/configuring
