module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {},
    extends: [
        'plugin:jest/all',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['jest', '@typescript-eslint', 'prettier'],
    // add your custom rules here
    rules: {
        'import/prefer-default-export': 'off',
        'no-console': 0,
        'no-prototype-builtins': 0,
    },
}
