module.exports = {
  "extends": "ajhyndman",
  "plugins": ["flowtype"],
  "rules": {
    // eslint-plugin-flow
    "flowtype/require-valid-file-annotation": ["error", "always"],
    "flowtype/semi": "error",
    "flowtype/space-after-type-colon": ["error", "always"],
    "flowtype/space-before-type-colon": ["error", "never"],
  }
};
