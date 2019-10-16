/* By putting an `index.js` file into the root folder we can simply
extend `@werkzeugkiste/eslint-config` instead of `@werkzeugkiste/eslint-config/.eslintrc.js`.
We still have our rules in  `.eslintrc` so we can use it to lint the lint config itself */
module.exports = require('./.eslintrc.js');
