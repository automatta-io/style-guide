const config = require('./eslint/base');

module.exports = [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
    languageOptions: {
      sourceType: 'commonjs',
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json',
      },
    },
  },
];
