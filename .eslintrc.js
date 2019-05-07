module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "version": "16"
    }
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "max-len": [1, 200],
    "no-console": 1,
    "new-cap": 0,
    "comma-dangle": 0,
    "object-curly-spacing": 0,
    "quotes": 0,
    "indent": ["warn", 2],
    "arrow-parens": ["error", "as-needed"]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    window: true,
    document: true,
    jQuery: false,
    $: false,
    moment: false,
    location: true,
    _: false,
    MODULE_MAP: true,
    System: false,
    T: true,
    localStorage: true
  }
};