module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-extra-semi": "off",
    "react-refresh/only-export-components": "off",
    "no-debugger": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "prefer-const": "warn",
    "no-constant-condition": "warn",
  },
}
