module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    indent: ['error', 2, {SwitchCase: 1}],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'quotes': [2, 'single', 'avoid-escape'],
    'no-multiple-empty-lines': ['warn', {max: 1}],
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'no-restricted-exports': 'warn',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': ['error', 'always'],
    semi: ["error", "always"],
    'max-len': ['error', {
      code: 150,
      ignoreComments: true,
      ignoreUrls: true,
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/named': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"]
  },
}
