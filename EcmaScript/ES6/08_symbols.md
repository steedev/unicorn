## 8. Symbol

`Symbol`:

1. nie wiemy jaką przechowuje wartość
2. jest ona unikalna

```js
const hidden = Symbol('ściśle tajne') // string przydatny do debugowania

let person = {
  [hidden]: '1241asfaw!@%!asdsd', // symbol jest ukryty
}

console.log(person[hidden])
```

```js
const FORMAT = Symbol('format()')

class Person {
  constructor(fName, lName) {
    this.fName = fName
    this.lName = lName
  }

  sayHello() {
    return this[FORMAT](`${this.fName} ${this.lName}`)
  }

  // computed properties

  // TEORETYCZNIE zmienna prywatna
  [FORMAT](text) {
    return text.toUpperCase()
  }
}

let person1 = new Person('Jan', 'Kowalski')
```

Metody symboli

`Nowy symbol utworzony nawet przez ten sam zapis NIE JEST TYM SAMYM SYMBOLEM`

```js
const hidden = Symbol('hidden')

let person = {
  [hidden]: '123asgsha1&$#@#asd',
  getSecret() {
    return this[hidden]
  },
}
```

Zapisanie symbolu w `Globalnym rejestrze`

```js
;(function () {
  Symbol.for('hidden')
})

let person = {
  [Symbol.for('hidden')]: '123asgsha1&$#@#asd',
  getSecret() {
    return this[Symbol.for('hidden')]
  },
}

console.log(Symbol.keyFor(hidden))

console.log(Object.getOwnPropertyNames(person)) // nie widzi symboli
console.log(Object.getOwnPropertySymbols(person)) // widzi same symbole
```

`Well-known Symbols` - Symbole wbudowane

- Symbol.hasInstance
- Symbol.toPrimitive
- Symbol.toStringTag
- Symbol.isConcatSpreadable
- Symbol.species
- Symbol.match, Symbol.replace, Symbol.search, Symbol.split
- Symbol.unscopables
- Symbol.iterator

```js
class Person {
  // klasa abstrakcyjna
  static [Symbol.hasInstance](obj) {
    return false
  }
}

class Employee {
  static [Symbol.hasInstance](obj) {
    return obj.constructor === Employee
  }
}

console.log(employee instanceof Person) // Teraz false
console.log(employee instanceof Employee) // Teraz true
```
