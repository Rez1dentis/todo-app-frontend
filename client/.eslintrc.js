module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './client/tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-confusing-void-expression': 0,
    '@typescript-eslint/semi': 'off',
    'comma-dangle': 0,
    'react/react-in-jsx-scope': 'off',
    semi: 0,
  },
};
