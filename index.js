module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "no-null"
  ],
  "rules": {
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }],
    "eol-last": ["error", "always"],
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "quotes": ["error", "single"],
    "max-len": ["error", { "code": 100, "ignoreStrings": true }],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "semi": ["error", "always"],

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
    ],

    // eslint-plugin-no-null
    "no-null/no-null": ["error"],

    // eslint-plugin-react
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "error",
    "react/sort-comp": ["error", {
      "order": [
        "type-annotations",
        "static-methods",
        "lifecycle",
        "/^on.+$/",
        "everything-else",
        "render"
      ]
    }]
  }
};
