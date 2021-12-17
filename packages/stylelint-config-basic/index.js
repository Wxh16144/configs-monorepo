module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
  ],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    // TODO: vscode stylelint error
    // {
    //   files: ['*.sass', '**/*.sass'],
    //   customSyntax: 'postcss-sass',
    // },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['*.stylus', '*.styl', '**/*.stylus', '**/*.styl'],
      customSyntax: 'postcss-styl',
    },
  ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-plugin-stylus',
  ],
  rules: {
    'max-nesting-depth': [4],
    'declaration-colon-space-after': 'always',
    'indentation': [2, { baseIndentLevel: 2 }],
    'color-hex-case': 'lower',
    'no-duplicate-selectors': true,
    'no-descending-specificity': null,
    'color-no-invalid-hex': true,
    'font-weight-notation': ['numeric', { ignore: ['relative'] }],

    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules',
      'at-rules',
    ],

    'plugin/declaration-block-no-ignored-properties': true,
  },
}
