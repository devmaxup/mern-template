module.exports = {
  "root": true,
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": [
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "impliedStrict": true,
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "16.9"
    }
  },
  "rules": {
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/boolean-prop-naming": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-filename-extension": 2,
    "react/style-prop-object": 2,
    "react/static-property-placement": 2,
    "react/sort-comp": 2,
    "react/prop-types": 1,
    "react/self-closing-comp": 2,
    "react/no-unused-state": 2,
    "react/no-unused-prop-types": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-multi-comp": [2,  { "ignoreStateless": true }],
    "react/jsx-max-depth": [2, { "max": 10 }],
    "react/jsx-sort-props": 2,
    "react/jsx-sort-default-props": 2,
    "react/jsx-fragments": 2,
    "complexity": [2, { "max": 5 }],
    "max-depth": [2, { "max": 3 }],
    "no-underscore-dangle": 0,
    "prettier/prettier": ["error", require('../.prettierrc.js')]
  }
};
