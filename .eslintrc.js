module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '18'
    }
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': [1, 200],
    'no-console': 1,
    'no-undef': 1,
    'new-cap': 0,
    'comma-dangle': 0,
    'object-curly-spacing': 0,
    'import/no-unresolved': 0,
    quotes: 0,
    indent: ['warn', 2],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'import/extensions': [0, 'never'],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    window: true,
    document: true,
    location: true,
    describe: true,
    it: true,
    expect: true,
  }
};
