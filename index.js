module.exports = {
    env: {
        browser: true,
        jasmine: true,
        amd: true,
        node: true
    },
    globals: {},
    plugins: [
        "html"
    ],
    extends: "eslint:recommended",
    rules: {
        'curly': "error",
        'default-case': "error",
        'dot-notation': ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
        'eqeqeq': "error",
        'guard-for-in': "error",
        'no-alert': "error",
        'no-caller': "error",
        'no-console': "off",
        'no-div-regex': "error",
        'no-else-return': "error",
        'no-eq-null': "error",
        'no-eval': "error",
        'no-extend-native': "error",
        'no-extra-bind': "error",
        'no-floating-decimal': "error",
        'no-global-assign': "error",
        'no-implicit-globals': "error",
        'no-implied-eval': "error",
        'no-invalid-this': "error",
        'no-iterator': "error",
        'no-labels': "error",
        'no-lone-blocks': "error",
        'no-loop-func': "error",
        'no-template-curly-in-string': "off",
        'no-unsafe-negation': "error",
        'no-magic-numbers': ["warn", { "ignore": [-1, 0, 1, 200, 404, 500], "ignoreArrayIndexes": true }],
        'no-multi-spaces': "error",
        'no-multi-str': "error",
        'no-new-func': "error",
        'no-new-wrappers': "error",
        'no-new': "warn",
        'no-proto': "error",
        'no-redeclare': "error",
        'no-return-assign': "error",
        'no-script-url': "error",
        'no-self-assign': "error",
        'no-self-compare': "error",
        'no-sequences': "error",
        'no-unused-expressions': "error",
        'no-useless-concat': "error",
        'no-useless-escape': "error",
        'no-with': "error",
        'radix': "error",
        'wrap-iife': "error",
        'yoda': ["error", "never"],

        'no-catch-shadow': "error",
        'no-shadow': "error",
        'no-shadow-restricted-names': "error",
        'no-use-before-define': "error",

        'array-bracket-spacing': "error",
        'brace-style': "error",
        'camelcase': "error",
        'comma-dangle': "error",
        'comma-spacing': "error",
        'comma-style': ["error", "last"],
        'computed-property-spacing': "error",
        'consistent-this': ["error", "that"],
        'eol-last': "error",
        'func-call-spacing': "error",
        'indent': ["error", 4, { "SwitchCase": 1 }],
        'key-spacing': ["error", { "afterColon": true }],
        'keyword-spacing': ["error", { "after": true }],
        'max-len': ["error", 120],
        'new-cap': "error",
        'newline-before-return': "error",
        'no-array-constructor': "error",
        'no-bitwise': "error",
        'no-lonely-if': "error",
        'no-multiple-empty-lines': "error",
        'no-negated-condition': "error",
        'no-new-object': "error",
        'no-tabs': "error",
        'no-trailing-spaces': "error",
        'no-underscore-dangle': ["error", { "allowAfterThis": true }],
        'no-unneeded-ternary': "error",
        'no-whitespace-before-property': "error",
        'object-curly-spacing': ["error", "always"],
        'object-property-newline': "error",
        'one-var-declaration-per-line': ["error", "always"],
        'one-var': ["error", "never"],
        'operator-linebreak': ["error", "after"],
        'padded-blocks': ["error", "never"],
        'quote-props': ["error", "as-needed"],
        'quotes': ["error", "single", { "avoidEscape": true }],
        'semi-spacing': ["error", { "before": false, "after": true }],
        'semi': ["error", "always"],
        'space-before-blocks': ["error", "always"],
        'space-before-function-paren': ["error", { "anonymous": "always", "named": "never" }],
        'space-in-parens': ["error", "never"],
        'space-infix-ops': "error",
        'space-unary-ops': "off",
        'spaced-comment': ["error", "always"],
        'unicode-bom': "error"
    }
}
