## 11. Promises

`Obietnice`:

1. do pracy z asynchronicznym

`resolve` - kiedy wszystko `ok`
`reject` - kiedy wyrzuci `error`

```js
let p = new Promise(function (resolve, reject) {})

getJSON('https://')
  .then((obj) => console.log(obj))
  .catch((err) => console.error())
```
