import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node, // For browser-specific globals like `window`, `document`
    },
  },
  pluginJs.configs.recommended, // Recommended ESLint rules
];
