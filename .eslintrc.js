module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {},
};
