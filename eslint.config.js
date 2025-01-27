import eslintPluginVue from 'eslint-plugin-vue';

export default [
    {
        // Extensions de fichiers à vérifier
        files: ['**/*.{vue,js,jsx,cjs,mjs}'],
        plugins: {
            vue: eslintPluginVue,
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            // Règles basiques ESLint
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'vue/html-self-closing': 'off',
        },
    },
];
