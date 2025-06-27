module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports', 'tailwindcss'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/**/*.tsx'],
      rules: {
        'import/no-unresolved': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',

        'react/require-default-props': 'off',
        'no-undef': 'off',

        'react/react-in-jsx-scope': 'off',

        'arrow-body-style': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
