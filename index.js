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
      2,
      {
        functions: false
      }
    ],

    // http://eslint.org/docs/rules/quotes
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      2,
      'never'
    ],

    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': [
      0
    ],

    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      2, { props: false }
    ],

    // http://eslint.org/docs/rules/strict
    strict: [
      0
    ],

    'mocha/no-exclusive-tests': 'error',

    // http://eslint.org/docs/rules/func-names
    'func-names': 0,

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      1
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
