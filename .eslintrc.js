module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/function-component-definition': [2,
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/button-has-type': 'off',
        'linebreak-style': 0,
        'max-len': [2, { code: 120 }],
        'react/require-default-props': 'off',
        'no-undef': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-sparse-arrays': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
    },

    globals: {
        __IS_DEV__: true,
    },
};
