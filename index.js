module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "parser": "babel-eslint",
  "plugins": [
    "import"
  ],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],

    // eslint-plugin-import
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ]
  }
};
