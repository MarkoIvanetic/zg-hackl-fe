/* eslint-disable import/no-anonymous-default-export */
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // Specify the directories or files to lint
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Only include files in src/ directory
    ignores: [
      ".next", // Exclude .next directory
      "node_modules", // Exclude node_modules
      "src/components/ui", // Exclude ShadCN components
    ],
    rules: {
      // No unused vars, allow variables starting with '_'
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Ban @ts-comment with a warning
      "@typescript-eslint/ban-ts-comment": "warn",
    },
  },

  // Extend legacy configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
