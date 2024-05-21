/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next-typescript'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'simple-import-sort/imports': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/self-closing-comp': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-useless-return': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
