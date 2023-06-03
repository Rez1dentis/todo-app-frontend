module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
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
    'import/no-duplicates': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
