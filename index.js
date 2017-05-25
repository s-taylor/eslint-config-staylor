// options are "off", "warn" or "error"
module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  plugins: [
    'mocha',
  ],
  rules: {
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],

    // http://eslint.org/docs/rules/quotes
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      'always-multiline',
    ],

    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    // http://eslint.org/docs/rules/strict
    strict: [
      'off',
    ],

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md
    'mocha/no-exclusive-tests': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      'warn',
    ],

    // http://eslint.org/docs/rules/space-before-function-parentheses
    'space-before-function-paren': [
      'error', 'never',
    ],
  },
};
