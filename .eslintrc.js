module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['prettier', 'react'],
  extends: ['google', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'prettier/prettier': 'error'
  }
};
