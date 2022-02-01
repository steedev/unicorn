## 4. Operatory rest & spread

```js
function calculate(type) {
  let args = [].slice.call(arguments, 1)

  args.reduce((prevVal, val) => prevVal + val)
}

console.log(calculate('sum', 2, 22, 3, 7, 13))
```

`rest` - może być dodany tylko na końcu

```js
function calculate(type, ...args) {} // [2, 22, 3, 7, 13]

console.log(calculate('sum', 2, 22, 3, 7, 13))
```

```js
let numbers = [2, 22, 3, 7, 13]
Math.max(numbers) // to nam nie zadziała!
Math.max(2, 22, 3, 7, 13)

Math.max.apply(Math, numbers) // SOLUTION => 22
```

`spread`

```js
let numbers = [2, 22, 3, 7, 13]
Math.max(...numbers)

let s = [...numbers]
```

Zamiana `string` na `array`

```js
function strToArray(string = '') {
  return string.split('')
}

console.log(strToArray('Kuba'))
```

`ES6`

```js
function strToArray(string = '') {
  return [...string]
}
```
