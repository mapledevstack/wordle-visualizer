import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import nextPlugin from "@next/eslint-plugin-next"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [".next/**", "node_modules/**", "src/**"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["app/**/*.{js,jsx,ts,tsx}"],

    plugins: {
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },

    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // We'll deal with unused variables as we migrate.
      "no-unused-vars": "off",
    },

    languageOptions: {
      globals: globals.browser,
    },
  },
)
