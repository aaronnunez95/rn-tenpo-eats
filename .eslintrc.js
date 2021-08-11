/* eslint-disable sort-keys */
module.exports = {
  root   : true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics          : 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser       : '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx                             : true,
      arrowFunctions                  : true,
      blockBindings                   : true,
      defaultParams                   : true,
      destructuring                   : true,
      forOf                           : true,
      generators                      : true,
      objectLiteralComputedProperties : true,
      objectLiteralShorthandMethods   : true,
      objectLiteralShorthandProperties: true,
      experimentalObjectRestSpread    : true,
      restParams                      : true,
      spread                          : true,
      templateStrings                 : true,
      modules                         : true,
      classes                         : true
    },
    ecmaVersion: 2018,
    sourceType : 'module'
  },
  rules: {
    'prettier/prettier': 'off', // Disable `eslint-plugin-prettier`

    // General

    'jsx-quotes'    : [ 'error', 'prefer-single' ],
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'after-used'
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max   : 1,
        maxEOF: 1
      }
    ],
    'padded-blocks'                  : [ 'error', 'never' ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev     : '*',
        next     : 'return'
      }
    ],
    'dot-location'      : [ 'error', 'property' ],
    'operator-linebreak': [ 'error', 'before' ],
    'quote-props'       : [
      'error',
      'as-needed',
      {
        keywords: false
      }
    ],
    'space-unary-ops': [
      'error',
      {
        words   : false,
        nonwords: false
      }
    ],
    'no-irregular-whitespace': 'off',
    'no-restricted-syntax'   : [
      'warn',
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace)$/]",
        message : 'Unexpected property on console object was called'
      }
    ],
    'object-curly-spacing'       : [ 'error', 'always' ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named    : 'never'
      }
    ],
    'func-call-spacing' : [ 'error', 'never' ],
    'space-in-parens'   : [ 'error', 'never' ],
    semi                : [ 'error', 'never' ],
    'comma-dangle'      : [ 'error', 'never' ],
    'no-trailing-spaces': 'error',
    yoda                : [ 'error', 'never' ],
    'comma-style'       : [ 'error', 'last' ],
    curly               : [ 'error', 'multi', 'consistent' ],
    'eol-last'          : 'error',
    'wrap-iife'         : [ 'error', 'inside' ],
    'space-infix-ops'   : 'error',
    'sort-keys'         : [ 'error', 'asc', { natural: true } ],
    'keyword-spacing'   : [
      'error',
      {
        overrides: {
          if: {
            after: false
          },
          while: {
            before: true
          },
          catch: {
            before: true
          }
        }
      }
    ],
    'spaced-comment'     : [ 'error', 'always' ],
    'space-before-blocks': [ 'error', 'always' ],
    'key-spacing'        : [
      'error',
      {
        align: 'colon'
      }
    ],
    'array-bracket-spacing': [ 'error', 'always' ],
    indent                 : [
      'error', 2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'max-len': [
      'error',
      {
        code         : 150,
        ignoreUrls   : true,
        ignoreStrings: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\('
      }
    ],

    // React Plugin
    // The following rules are made available via `eslint-plugin-react`

    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs         : true,
        allowArrowFunctions: true
      }
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeSelfClosing: 'never'
      }
    ],
    'react/jsx-equals-spacing'          : 'error',
    'react/jsx-closing-bracket-location': [ 'error', 'after-props' ],
    'react/jsx-curly-spacing'           : 'error',
    'react/jsx-filename-extension'      : [
      'warn',
      {
        extensions: [ '.js' ]
      }
    ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],
    'react/jsx-handler-names'      : [
      'error',
      {
        eventHandlerPrefix    : '_handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables   : true
      }
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 3,
        when   : 'always'
      }
    ],
    'react/jsx-sort-props'     : 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/prop-types'         : 'off',

    // React Hooks Plugin
    // The following rules are made available via `eslint-plugin-react-hooks`

    'react-hooks/exhaustive-deps': 'off'
  }
}
/* eslint-enable sort-keys */
