// options are "off", "warn" or "error"
module.exports = {
  extends: 'eslint-config-airbnb',
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  plugins: [
    'mocha'
  ],
  rules: {
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],

    // http://eslint.org/docs/rules/quotes
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      'never'
    ],

    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': [
      'off'
    ],

    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'error', { props: false }
    ],

    // http://eslint.org/docs/rules/strict
    strict: [
      'off'
    ],

    'mocha/no-exclusive-tests': 'error',

    // http://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      'warn'
    ],

    'react/require-extension': 'off',

    'generator-star-spacing': [
      'error', {
        before: true,
        after: false
      }
    ]
  }
};
