import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import react from 'eslint-plugin-react';
// import markdown from 'eslint-plugin-markdown';

const commonRules = {
  // '@typescript-eslint/explicit-module-boundary-types': 'off',
  // '@typescript-eslint/no-explicit-any': 'warn',

  // '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  // '@typescript-eslint/no-var-requires': 'error',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'no-debugger': 'warn',

  'semi': ['error', 'always'],
  'quotes': ['error', 'single', { avoidEscape: true }],
  'comma-dangle': ['error', 'always-multiline'],

  // 'unused-imports/no-unused-imports': 'warn',
  // 'unused-imports/no-unused-vars': [
  //   'warn',
  //   { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  // ],
};

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  {
    ignores: ['.astro/', 'dist/', 'tsconfig.json'], // acts as global ignores, due to the absence of other properties
  },

  {
    files: ['**/*.mjs', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // document, localStorage, etc. are recognized globally
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      },
    },
    rules: {
      ...commonRules,
    },
  },

  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...commonRules,
    },
  },

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      astro,
    },
    rules: {
      ...astro.configs.recommended.rules,
      ...commonRules,
    },
  },
];

