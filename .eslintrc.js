const ALWAYS = 'always';
const ERROR = 'error';
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'google',
    'plugin:json/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'indent': [
      ERROR, 2, {
        'ArrayExpression': 'first',
        'FunctionExpression': {
          'body': 1, 'parameters': 'first',
        },
        'ObjectExpression': 'first',
        'SwitchCase': 1,
        'CallExpression': {'arguments': 'first'},
      },
    ],
    'valid-jsdoc': 0,
    'max-len': 0,
    'new-cap': 'off',
    'no-console': ERROR,
    'no-debugger': ERROR,
    'no-multiple-empty-lines': [ERROR, {
      'max': 1, 'maxEOF': 0, 'maxBOF': 0,
    }],
    'object-curly-newline': [ERROR, {
      'ObjectExpression': {
        'multiline': true, 'minProperties': 2,
      },
      'ObjectPattern': {
        'multiline': true, 'minProperties': 2,
      },
      'ImportDeclaration': {
        'multiline': true, 'minProperties': 2,
      },
      'ExportDeclaration': {
        'multiline': true, 'minProperties': 2,
      },
    }],
    'padded-blocks': [ERROR, ALWAYS],
    'padding-line-between-statements': [
      ERROR,
      {
        'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'],
      },
      {
        'blankLine': ALWAYS, 'prev': '*', 'next': 'class',
      },
      {
        'blankLine': ALWAYS, 'prev': '*', 'next': 'function',
      },
      {
        'blankLine': ALWAYS, 'prev': 'block-like', 'next': '*',
      },
      {
        'blankLine': ALWAYS, 'prev': '*', 'next': 'block-like',
      },
    ],
    'require-jsdoc': [0],
    'semi': [ERROR, ALWAYS],
  },
};
