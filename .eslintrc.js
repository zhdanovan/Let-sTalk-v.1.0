module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2020": true,
        "jest/globals": true
    },
    "globals": {
        "process": true,
        "Promise": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "jest"
    ],
    "rules": {}
};