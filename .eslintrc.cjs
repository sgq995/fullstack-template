module.exports = {
  plugins: ["astro", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.cjs"],
      env: { node: true },
    },
    {
      files: ["*.mjs"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
      },
      env: { node: true },
    },
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
};
