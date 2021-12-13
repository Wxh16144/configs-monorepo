
const locale = require('./locale')

/**
 * commitzen 配置
 * see: https://github.com/leonardoanalista/cz-customizable
 */

module.exports = {
  types: [
    { value: 'feat', name: locale.TYPE_FEAT },
    { value: 'fix', name: locale.TYPE_FIX },
    { value: 'docs', name: locale.TYPE_DOCS },
    { value: 'style', name: locale.TYPE_styles },
    { value: 'refactor', name: locale.TYPE_REFACTOR },
    { value: 'perf', name: locale.TYPE_PERF },
    { value: 'test', name: locale.TYPE_TEST },
    { value: 'revert', name: locale.TYPE_REVERT },
    { value: 'chore', name: locale.TYPE_CHORE },
    { value: 'release', name: locale.TYPE_RELEASE },
    { value: 'deps', name: locale.TYPE_DEPS },
    { value: 'build', name: locale.TYPE_BUILD },
  ],
  scopes: [],
  messages: {
    type: locale.TIPS_TYPE,
    scope: locale.TIPS_SCOPE,
    customScope: locale.TIPS_CUSTOM_SCOPE,
    subject: locale.TIPS_SUBJECT,
    body: locale.TIPS_BODY,
    breaking: locale.TIPS_BREAKING,
    footer: locale.TIPS_FOOTER,
    confirmCommit: locale.TIPS_CONFIRM_COMMIT,
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
}
