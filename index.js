module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "no-null",
    "prettier"
  ],
  "rules": {
    "eqeqeq": ["error", "always", { "null": "ignore" }],

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
    "no-null/no-null": "error",

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
