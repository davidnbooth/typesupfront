module.exports = {
    "env": {
        "browser": true,
        "es2017": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {"ecmaVersion": 2018},
    "rules": {
        "indent": [
            "error",
            4,
            {"SwitchCase" : 1}
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unexpected-multiline": [
            "error"
        ],
        "no-var" : ["error"]
    },
}