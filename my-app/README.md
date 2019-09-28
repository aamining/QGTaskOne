
* ESLINT  and Prettier

```
yarn add eslint@5.16.0 babel-eslint@10.0.1

or

Yarn add -D eslint@5.16.0 babel-eslint@10.0.1

```


```
Yarn add -D eslint-config-airbnb eslint-config-prettier eslint-plugin-react eslint-plugin-importprettier pretty-quick
```

>> .eslintrc
```
{
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "extends": ["airbnb", "prettier"],
    "env": {
        "browser": true,
        "jest": true
    },
    "rules": {
        "max-len": ["error", { "code": 100 }],
        "prefer-promise-reject-errors": ["off"],
        "react/jsx-filename-extension": ["off"],
        "react/prop-types": ["warn"],
        "no-return-assign": ["off"]
    }
}

```
>> .prettierrc.js
```
[{
    "printWidth": 100,
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
}]
```

Visual Studio add in:

>> Code > preferences > setting

```
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
```
