module.exports = {
    root: true, env: {
        node: true, browser: true
    }, extends: ['plugin:vue/vue3-essential', '@vue/standard'], parserOptions: {
        parser: '@babel/eslint-parser'
    }, rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "indent": ["error", 4],
        "semi": [2, "never"],
    }
}
