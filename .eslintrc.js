{
  "extends": ["eslint:recommended", "plugin:react/recommended", "prettier"],
  "parser": "babel-eslint",
  "env": {
    "jest/globals": true,
    "browser": true
  },
  "globals": {
    "process": true,
    "Promise": true
  },
  "plugins": ["prettier", "jest"],
  "rules": {
    "prettier/prettier": ["error"],
    "quotes": [2, "double"],
    "comma-dangle": [2, "never"],
    "react/prop-types": [0] 
  }
}

