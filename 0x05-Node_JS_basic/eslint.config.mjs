import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node, // Using Node.js globals
    },
    rules: {
      "no-undef": "error", // Ensure undefined variables are flagged
    },
  },
  pluginJs.configs.recommended, // Include the recommended ESLint config
];
