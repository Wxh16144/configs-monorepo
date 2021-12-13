// see: https://commitlint.js.org

const czConfig = require('@wuxh/commitzen-config')

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  // rules: https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
  rules: {
    'type-enum': [2, 'always', czConfig.types.map(({ value }) => value)],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-max-length': [1, 'never', 100],
    'subject-case': [0, 'never'],
    'scope-empty': [1, 'never'],
  },
}
