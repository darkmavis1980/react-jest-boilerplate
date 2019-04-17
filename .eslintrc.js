module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "rules": {
    "max-len": [1, 200],
    "no-console": 1,
    "new-cap": 0,
    "comma-dangle": 0,
    "object-curly-spacing": 0,
    "quotes": 0,
    "indent": ["warn", 2],
    "arrow-parens": ["error", "as-needed"]
  },
  "globals": {
    window: true,
    document: true,
    jQuery: false,
    $: false,
    location: true,
    moment: false,
    _: false,
    P5: true,
    MODULE_MAP: true,
    System: true,
    T: true,
    localStorage: true
  }
};