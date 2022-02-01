## 7. Klasy

`Klasy`:

1. to funkcje
2. nie są `Hoistowane`
3. nie są dodawane jako właściwości obiektu `window`
4. posiadają prototype

```js
function Person(fName, lName) {
  // funkcja konstruująca
  this.fName = fName
  this.lName = lName
}

Person.prototype.sayHello = function () {
  return this.fName + ' ' + this.lName
}

// bez słowa new => this kieruje na obiekt globalny, a nie na obiekt nowo utworzony
const person1 = new Person('Jan', 'Kowalski')
```

`ES6`

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

const person1 = new Person('Jan', 'Kowalski')
```

`Dziedziczenie prototypowe`

```js
function Person(fName, lName) {
  this.fName = fName
  this.lName = lName
}

Person.prototype.sayHello = function () {
  return this.fName + ' ' + this.lName
}

function Employee(fName, lName, position) {
  Person.call(this, fName, lName)
  this.position = position
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

Employee.prototype.sayHello = function () {
  const name = Person.prototype.sayHello.call(this)
  return `Nazywam się ${name} i pracuję jako ${this.position}.`
}

const employee1 = new Employee('Jan', 'Kowalski', 'programista')
```

`ES6`

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

class Employee extends Person {
  constructor(fName, lName, position) {
    super(fName, lName)

    // najpierw super() potem this
    this.position = position
  }

  sayHello() {
    // const name = super.sayHello() // odwołanie do klasy nadrzędnej
    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`
  }
}

const employee1 = new Employee('Jan', 'Kowalski', 'programista')
```

`Gdybyśmy nie utworzyli konstruktora, js zrobi to za nas`

```js
construcotr(...args) {
  super(...args)
}
```

`Dziedziczenie z wbudowanych typów `NEW``

```js
// Collection dziedziczymy z Array, a Array nie wie nic o Collection
class Collection extends Array {
  construtor(...args) {
    if (args.length === 1) {
      super(1)
      this[0] = args[0]
    }
  }

  iterate() {}
}

let col = new Collection(10, 20, 30)

let colPart = col.slice(0, 1) // ma dotęp do iterate()
```

`Metody statyczne` - można z niej skorzystać kiedy zostanie utworzony nowy obiekt

```js
class Person {
  constructor(fName, lName) {
    this.fName = fName
    this.lName = lName
  }

  sayHello() {
    return `${this.fName} ${this.lName}`
  }

  // to nie jest na prototypie tylko bezpośrenio na klasie Person
  static create({ fName, lName } = {}) {
    return new Person(fName, lName)
  }
}

const person1 = new Person('Jan', 'Kowalski')

let json = `{
  "fName": "Anna",
  "lName": "Kowalska"
}`

// liknij tutaj =>
const person2 = Person.create(JSON.parse(json))
```

Użycie `super` na obiektach

```js
class Person {
  constructor(fName, lName) {
    this.fName = fName
    this.lName = lName
  }

  sayHello() {
    return `${this.fName} ${this.lName}`
  }

  static inherit(obj) {
    Object.setPrototypeOf(obj, Person.prototype)
  }
}

const employee1 = {
  fName: 'Jan',
  lName: 'Kowalski',
  position: 'programista',
  sayHello() {
    // let name = Object.setPrototypeOf(this).sayHello.call(this)

    // super jest dynamiczne => samo ustawia sobie kontekst
    // super nie zadziała na zwykłej & => funkcji
    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}`
  },
}

Person.inherit(emloyee1)
```

1. Metody dodawane na prototypie są `enumerable`
1. Metody dodawane w klasie są `nonenumerable`

```js
function Person(fName, lName) {
  this.fName = fName
  this.lName = lName

  Object.defineProperty(Person.prototype, 'sayHello', {
    enumerable: false,
    value: function () {
      return this.fName + ' ' + this.lName
    },
  })
}
```

2. można dziedziczyć z funkcji napisanej w `ES5`
3. tworzenie klasy korzysta z `'use strict'`
4. na klasie nie można korzystać z `call` i `apply`
5. `new.target` kieruje na konstruktor klasy, z której ten obiekt został wywowały
6. z klas abstrakcyjnych można tylko dziedziczyć `nie ma ich w JS`

```js
// symulacja klasy abstrakcyjnej
class Person {
  constructor() {
    if (new.target === Person) {
      throw new Error('Klasy Person nie można używać bezpośrednio')
    }
  }
}
```

7. z klasy można korzystać jak z `funkcji anonimowych` w formie wyrażenia

```js
function createInstance(fromClass, ...args) {
  return new fromClass(...args)
}

const person2 = createInstance(
  class {
    constructor(fName, lName) {
      this.fName = fName
      this.lName = lName
    }
  },
  'Anna',
  'Nowak',
)

person2.constructor.name // ""
```
