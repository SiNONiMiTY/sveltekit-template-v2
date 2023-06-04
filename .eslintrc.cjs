// References used to configure
// https://github.com/ota-meshi/eslint-plugin-svelte
// https://github.com/ota-meshi/svelte-eslint-parser

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['*.cjs'],
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            extends: ['plugin:svelte/recommended'],
            plugins: ['eslint-plugin-svelte'],
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'svelte/valid-compile': [
                    'error',
                    {
                        "ignoreWarnings": true
                    }
                ]
            },
        }
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
    },
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    rules: {
        // Error level must always come first before the actual option value
        // https://eslint.org/docs/latest/rules
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            },
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'never',
            },
        ],
        'eqeqeq': ['error', 'always'],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true,
            },
        ],
        'semi': ['error', 'never'],
    }
}
