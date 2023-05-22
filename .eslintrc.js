module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    requireConfigFile: false,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
  overrides: [
    {
      files: ['src/**/*.stories.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['**/src/components/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['src/**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:storybook/recommended',
    '@vue/typescript',
    'plugin:prettier/recommended',
  ],
};
