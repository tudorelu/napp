module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/standard"
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react",
    "react-native",
    "standard"
  ],
  env: {
    es6: true,
    node: true,
    "react-native/react-native": true
  },
  globals: {
    global: "readonly",
    HermesInternal: "readonly"
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
  },
  rules: {
    "prettier/prettier": "error"
  }
};
