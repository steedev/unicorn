## 13. Proxy API

`Proxy API` - niskopoziomowy dostęp

`Gettery & Settery`

```js
var person = {
  fName: 'Jan',
  lName: 'Kowalski',

  getFullName: function () {
    return this.fName + ' ' + this.lName
  },

  setFullName: function (fullName) {
    var parts = fullname.split(' ')

    this.fName = parts[0]
    this.lName = parts[1]
  },
}
```

```js
const person = {
  fName: 'Jan',
  lName: 'Kowalski',

  // używa się jej jak właściwości
  get fullName() {
    return this.fName + ' ' + this.lName
  },

  set fullName(fullName) {
    const parts = fullname.split(' ')

    this.fName = parts[0]
    this.lName = parts[1]
  },
}

person.fullName // Jan Kowalski
person.fullName = 'Jakub Nowak' //
```

W `ES5` nie dało się tego przechwycić jeżeli nie przypisałem gettera lub settera pod `age`

```js
person.age = 20
20
```

`ES6`

`Traps` - pułapki

```js
const person = {
  fName: 'Jan',
  lName: 'Kowalski',
  _age: 20,
}

let proxy = new Proxy(person, {
  get(target, property, receive) {
    console.log(target)
    console.log(property)
    console.log(receive)

    // działanie zmiennej prywatnej
    if (property.charAt(0) === '_') {
      return undefined
    }

    return Reflect.get(target, property, receive)
  },
})

proxy.fName // Jan
proxy._age // undefined
```

`Apply Trap`

```js
class Person {
  constructor(fName, lName) {
    this.fName = fName
    this.lName = lName
  }

  sayHello() {
    return `${this.fName} ${this.lName}`
  }
}

const PersonProxy = new Proxy(Person, {
  // Wywowa się kiedy ktoś stworzy instancję Person bez new
  apply(target, thisArg, argumentsList) {
    return new target(...argumentsList)
  },
})

// musimy to wywołać na obiekcie Proxy, a nie Class
const person1 = PersonProxy('Jan', 'Kowalski')
```
