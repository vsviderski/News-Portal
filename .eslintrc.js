module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        // 'react/jsx-indent': [2, 4],
        // 'react/jsx-indent-props': [2, 4],
        // indent: [2, 4],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/button-has-type': 'off',
        'linebreak-style': 0,
        // 'jsx-quotes': [2, 'prefer-single'],
        'max-len': [2, { code: 120, ignoreComments: true }],
        'react/require-default-props': 'off',
        'no-undef': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-sparse-arrays': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid'] },
        ],
        'no-use-before-define': 0,
        'no-param-reassign': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/jsx-no-useless-fragment':[2, {allowExpressions: true}]
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
