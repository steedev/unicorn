# 1. Modules

`Node.js` oplata każdy plik funkcją anonimową, przez co nie mamy `globalnych zakresów`

```js
(function (exports, require, nodule, __filename, __dirname) {})();
```
