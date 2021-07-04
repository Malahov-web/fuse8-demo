module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto",
                // "disableLanguages": ["js"] // don't work?
            },
            // "disableLanguages": ["js"] // don't work?            
        ],
        // "disableLanguages": ["js"],
        // "disableLanguages": 0,
    },
};
