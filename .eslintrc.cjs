// .eslintrc.cjs
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier', // отключает правила, конфликтующие с Prettier
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        // свои правила (можешь добавлять по вкусу)
        'react/react-in-jsx-scope': 'off', // если используешь Vite, React 17+
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
