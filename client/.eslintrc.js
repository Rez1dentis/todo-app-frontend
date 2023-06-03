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
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'comma-dangle': 0,
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/semi': 'off',
    semi: 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
