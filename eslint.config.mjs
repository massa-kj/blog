import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import react from 'eslint-plugin-react';
import markdown from 'eslint-plugin-markdown';

export default [
  js.configs.recommended,
  ...astro.configs.recommended,

  {
    ignores: ["eslint.config.mjs", ".astro/", "dist/", "tsconfig.json"] // acts as global ignores, due to the absence of other properties
  },

  {
    rules: {
      'semi': ['error', 'always'],
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: {
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
    rules: {
      ...react.configs.recommended.rules,
    },
  },

  {
    files: ['**/*.astro'],
    rules: {
    },
  },

  // {
  //   files: ['**/*.md'],
  //   plugins: { markdown },
  //   processor: 'markdown/markdown',
  // },
];

