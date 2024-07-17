/* eslint-env node */



module.exports = {

    root: true,

    'extends': [

        'plugin:vue/vue3-recommended',

        'eslint:recommended',

        '@vue/typescript/recommended',

    ],

    parserOptions: {

        ecmaVersion: 'latest',

        parser: '@typescript-eslint/parser'

    },

    ignorePatterns: ['**/.eslintrc.cjs'],

    rules: {

        '@typescript-eslint/indent': 2,

        'indent': 0,

        '@typescript-eslint/quotes': [2, 'single', {avoidEscape: true}],

        'quotes': 0,

        '@typescript-eslint/semi': [2, 'always'],

        'semi': 0,

        '@typescript-eslint/prefer-for-of': 2,

        '@typescript-eslint/member-delimiter-style': 2,

        '@typescript-eslint/explicit-function-return-type': 2,

        '@typescript-eslint/array-type': 2,

        '@typescript-eslint/func-call-spacing': 2,

        '@typescript-eslint/key-spacing': 2,

        '@typescript-eslint/keyword-spacing': 2,

        '@typescript-eslint/naming-convention': [2,

            {

                selector: 'default',

                format: ['camelCase'],

                leadingUnderscore: 'allow',

                trailingUnderscore: 'allow',

            },



            {

                selector: 'import',

                format: ['camelCase', 'PascalCase'],

            },



            {

                selector: 'variable',

                format: ['camelCase', 'UPPER_CASE'],

                leadingUnderscore: 'allow',

                trailingUnderscore: 'allow',

            },



            {

                selector: 'typeLike',

                format: ['PascalCase'],

            },

            {

                selector: 'typeProperty',

                format: null,

            },

            {

                selector: 'objectLiteralProperty',

                format: null,

            }

        ],

        '@typescript-eslint/no-explicit-any': 2,

        "@typescript-eslint/no-unused-vars": [

            2,

            {

                "argsIgnorePattern": "^_",

                "varsIgnorePattern": "^_",

                "caughtErrorsIgnorePattern": "^_"

            }

        ],

        '@typescript-eslint/padding-line-between-statements': [

            2,

            { blankLine: "always", prev: "*", next: "function" }

        ],

        'padding-line-between-statements': 0,

        'no-multi-spaces': 2,

        'space-infix-ops': 2,



        'vue/html-indent': [2, 4],

        'vue/multi-word-component-names': 0,

        'vue/custom-event-name-casing': 2,

        'vue/define-emits-declaration': 2,

        'vue/define-props-declaration': 2,

        'vue/next-tick-style': 2,

        'vue/no-required-prop-with-default': 2,

        'vue/block-order': [2, {'order': ['template', 'script']}],

        "vue/block-lang": ["error", {"script": {"lang": "ts"}}],

        'vue/component-api-style': 2,

        'vue/component-name-in-template-casing': 2,

        'vue/no-unused-properties': 2,

        'vue/no-useless-mustaches': 2,

        "vue/no-restricted-block": [2, "style"],

        "vue/max-attributes-per-line": ["error", {

            "singleline": {

                "max": 3

            },

            "multiline": {

                "max": 1

            }

        }],



        'array-callback-return': 2,

        'eqeqeq': 2,

        'comma-style': [2, 'last'],

        'comma-spacing': 2,

        'function-paren-newline': [2, 'never'],

        'one-var': [2, 'never'],

        'semi-style': [2, 'last'],

        'array-bracket-spacing': [2, 'never'],

        'object-curly-spacing': [2, 'never'],

        'object-curly-newline': [2, {ImportDeclaration: 'never'}],

        'no-duplicate-imports': 2,

        'no-dupe-else-if': 2,

        'curly': 2,

        'dot-location': [2, 'property'],

        'dot-notation': 2,

        'no-param-reassign': 2,

        'no-self-compare': 2,

        'no-unmodified-loop-condition': 2,

        'no-unused-expressions': [2, {'allowTernary': true}],

        'no-undef': 0,



        'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }]



    }

};