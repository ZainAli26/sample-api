import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import eslint  from "eslint-config-prettier"

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {ignores: ["*build**/*", "*.mjs", "*.js"]},
  {files: ["**/*.ts"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  ...compat.extends("standard-with-typescript"),
  ...compat.extends("eslint-config-prettier")
];
