import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import next from "eslint-config-next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, ...next, ...compat.config({
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
  }
}), {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}]

export default eslintConfig;
