## 2. Zmainy w obiektach

```js
let fName = 'Jan',
  lName = 'Kowalski'
let person = { fName, lName } // if key == wartość
```

`Concise Methods`

```js
let person = {
  fName,
  lName,
  getFullName() {
    return this.fName + ' ' + this.lName
  },
}
```

`Syntactic Sugar` - dostajemy coś co zapisuje się inaczej, ale działa tak samo jak w dłuższej formie

Dynamicznie tworzona funkcja:

```js
let fnName = 'getFullName'

let person = {
  fName,
  lName,
  [fnName + '1']: 'Witaj!',
  [fnName]() {
    return
  },
}
```

`Object setPrototypeOf` - ustawienie prototypu dla konkretnego obieku

```js
function Person(fName, lName) {
  this.fName = fName
  this.lName = lName
}

Person.prototype.sayHello = function () {
  return
}

let person1 = new Person('Jan', 'Kowalski')

let methods = {
  sayHello: function () {
    return
  },
}

Object.setPrototypeOf(person1, methods)
```

`Object assign`

```js
function slider(config) {
  let defaults = {
    speed: 500,
    pause: 3000,
    easing: 'linear',
  }
  const options = Object.assign({}, defaults, config)
}

slider({
  easing: 'ease-in-out',
  pause: 1000,
})
```

`Object is` - sprawdzanie wartości

```js
Object.is(1, 1) // to samo co ===

Object.is(NaN, NaN) // true
NaN === NaN // false
```
