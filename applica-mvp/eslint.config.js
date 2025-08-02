
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore generated output and common junk folders
  globalIgnores([
    'dist',
    'node_modules',
    'coverage',
    '.next',
    '.cache',
    '__generated__',
  ]),

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    rules: {
      // Warn about unused variables unless ALL_CAPS (e.g., constants)
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      
      // React Hooks Rules (solid UX guardrails)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Defensive defaults for cleaner long-term code
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',

      // Optional: react-refresh guard in dev
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
])
