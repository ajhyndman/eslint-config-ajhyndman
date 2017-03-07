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
    "import"
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
    "indent": ["error", 2],
    "max-len": ["error", { "code": 100 }],
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
    ],

    // eslint-plugin-react
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "error",
    "react/sort-comp": ["error", {
      "order": [
        "static-methods",
        "lifecycle",
        "/^on.+$/",
        "everything-else",
        "render"
      ]
    }]
  }
};
