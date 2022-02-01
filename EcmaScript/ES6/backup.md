## 1. Zmiany w nazwach

`Hoisting` - wynoszenie zmiennych na górę zakresu

```js
// tylko funkcje mogą tworzyć nowy zakres zmiennych
const a // wyniesienie zmiennej / funkcji też
console.log(a) // undefined
a = 5
console.log(a) // 5

// zmienna globalna w przeglądarce jest obiektem windows
var firstName = "Jan" === window.firstName = "Jan"
```

Zmienna `let`:

1. nie korzysta z Hoistingu
2. jest prywatna w utworzonym zakresie
3. nie da się jej zadeklarować jeszcze raz

Wszystko co jest nad deklaracją zmiennej jest określane jako `TemporalDeadZone`

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

## 3. Zmiany w funkcjach

`Arrow functions`:

1. użycie jako callback
2. nie może być traktowana jako konstruktor
3. nie zawiera prototypu

```js
let getName = (kid) => (kid ? 'Jaś' : 'Jan')

let getObj = () => ({ fName: 'Jan' })
```

`arguments` - specialna zmienna wewnątrz funkcji

```js
const args = () => {
  // Sama funkcja => nie ma dostępu arguments
  console.log(arguments)
}

args(1, 2, 3) // => [1, 2, 3, ...]
```

`Kontekst `this``- nie da się ustawić kontekstu dla`arrow functions`

```js
let person = {
  fName: 'Jan',
  sayHello: () => {
    return this.fName // this kieruje na this o jedno słowo wyżej => w tym przypadku window

    var that = this // zmienna kontekstu

    setTimeout(function () {
      console.log(that.fName)
    }, 2000)

    setTimeout(
      function () {
        console.log(this.fName)
      }.bind(this), // bindowanie kontekstu
      2000,
    )

    setTimeout(() => {
      console.log(this.fName) // jeden zakrez wyżej, wskazujący obiekt person
    }, 2000)
  },
}

console.log(person.sayHello()) // undefined
```

`Domyślne parametry`

```js
function sum(a, b) {
  b = b || 2
  return a + b
}
```

`ES6`

```js
function sum(a, b = getValue()) {
  return a + b
}
```

Możemy użyć pierwszego / wcześniejszego parametru w kolejnym parametrze

```js
function getCountryCode(country, code = country.slice(0, 3)) {
  return { country, code }
}
```

`Lazy evaluation`

```js
function getCountryInfo(countryInfo = getCountryCode('Polska')) {
  // lewa strona nie jest evaluowana, ponieważ dostaliśmy parametr
  return 'Państwo to' + countryInfo.country
}
```

Współpraca z arguments

```js
function multiplyBy(x, n = x) {
  console.log(arguments.length)

  return x * n

  multiplyBy.length // określa ile func potrzebuje parametrów => 1, domyślny parametr jest ignorowany
}
```

Nazywanie funkcji / debugowanie - w `ES6` nazwa funkcji odziedzicza nazwę zmiennej

```js
let getName = function () {
  // tutaj func nie ma nazwy
  throw new Error('Wystąpił błąd')

  return 'Jan'
}
```

`Jeden wyjątek kiedy tak nie jest!`

```js
let getPersonName = new Function('', "return 'Jan'")
```

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

## 5. Destructuring

`Obiekty`

```js
let person = {
  fNamme: 'Jan',
  lName: 'Kowalski',
  age: 49,
}

// Kiedy nie mamy pewności, że zwróci nam coś to korzystamy z  ||
let { fName: firstName, lName, age } = person || {}
```

W przypadku kiedy mamy już deklarację którejś ze zmiennych wcześniej musimy opleść nasz obiekt w ()

```js
let fName = 'Kuba'
;({ fName, lName, age } = person)
```

`Tablice`

```js
let numbers = [1, 2, 3, 4, 5]

let [a, b, , d] = numbers // idziemy kolejno
console.log(a, b, d) // 1, 2
```

`Value Swapping`

```js
let a = 1,
  b = 2

;[a, b] = [b, a]
```

Zagnieżdzone struktury

```js
let person = {
  fName: 'Jan',
  lName: 'Kowalski',
  age: 49,
  job: {
    name: 'Programista',
    experience: 20,
  },
  favNumbers: {
    list: [2, 7, 3],
  },
}

let {
  fName,
  job: { name: jobName, experience },
  favNumbers: {
    list: [, second],
  },
} = person || {}
```

Domyślne wartości i `rest`

```js
let numbers = [1, 2, 3, 4, 5]

// first, second, tablica z resztą wartości
let [first, second, ...args] = numbers || []
```

```js
let numbers = [10]

// Działa tylko z UNDEFINED
let [first, second = 2] = numbers || [] // nie ma niczego => zwraca 2
```

`Destructuring na parametrach funkcji`

```js
function setSliderSpeed({ speed, easing } = {}) {
  let slider = {}

  slider.speed = speed
  slider.easing = easing
}

const config = {
  autoPlay: true,
  speed: 500,
  pause: 2000,
  easing: 'linear',
}

setSliderSpeed(config)
```

## 6. Zmiany z ciągach znaków

`Interpolacja wartości`

```js
let person = {
  fNamme: 'Jan',
  lName: 'Kowalski',
  age: 49,
}

let { fName, lName, age } = person

let info = `Imię ${true ? fName : 'Kuba'}`
```

`Tag Function` - funkcja otrzymująca wszystkie stringi i wartości w postaci tablic

`Zastosowanie np: w tłumaczeniu tekstu`

```js
function formatPrice(strings, ...values) {
  let output = ''

  strings.forEach((string, index) => {
    let value = values[index]
    output += string

    if (value !== undefined) {
      if (typeof value === 'number') {
        output += value.toFixed(2) + 'PLN'
      } else {
        output += value
      }
    }
  })
}

let product = {
  name: 'Płyta DVD',
  price: 1,
}

let { name: pName, price: pPrice } = product

let info = formatPrice`Dodałeś do koszyka produkt: ${pName} w cenie ${pPrice}.`
```

`Nowe metody dla stringów`:

1. startsWith
2. endsWith
3. includes
4. repeat

```js
const URL = 'https://steedev.github.io/'
const filePath = '/Users/stee/Desktop/app/index.html'

function isHTTPS(text) {
  // return text.indexOf('https://' === 0)
  return text.startsWith('https://') // nowa metoda
}

function hasExt(path, ext) {
  return path.endsWith(`.${ext}`)
}

function includes(text, substring) {
  // return text.indexOf(substring) !== -1
  return text.includes(substring)
}
```

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

## 9. Iteratory

`Iteratory`:

1. obiekt, na którym można wielokrotnie wywoływać metodę `next()`
2. `next()` zwraca `value` & `done` kiedy `done` jest true pętla się kończy
3. pomaga w iterowaniu

`ES5`

```js
const it = function () {
  var numbers = [1, 2, 3, 4, 5],
    index = 0

  return {
    next: function () {
      return {
        done: index === numbers.length ? true : false,
        value: numbers[index++],
      }
    },
  }
}

let iterator = it()

for (let o = iterator.next(); o.done !== true; o = iterator.next()) {
  console.log(value) // 1, 2, 3, 4, 5
}
```

`ES6`

```js
let it = {
  [Symbol.iterator]() {
    const numbers = [1, 2, 3, 4, 5],
      index = 0

    return {
      next() {
        return {
          done: index === numbers.length ? true : false,
          value: numbers[index++],
        }
      },
    }
  },
}

let iterator = it[Symbol.iterator]()

for (let o = iterator.next(); o.done !== true; o = iterator.next()) {
  console.log(value) // 1, 2, 3, 4, 5
}
```

`for...of` - pozwala iterować na obiektach, które zawierają `iterator`

```js
for (let value of it) {
}
```

```html
<div class=".edu-content">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
```

Można po tym iterować, ponieważ posiada `iterator`

```js
const lis = document.querySelectorAll('.edu-content ul li")
```

`spread` na iteratorach

```js
// tylko li 2 dostanie bolda
;[...lis]
  .filter((li) => li.textContent.includes('2'))
  .forEach((li) => (li.style.fontWeight = 'bold'))
```

## 10. Generators

`Generator`:

1. nie może być utworzony z pomocą =>
2. ta funkcja zwraca iterator
3. funkcje te są pauzowane

```js
function* it() {
  yield 1
  yield 2
  yield 3
}

let iterator = it()

console.log(iterator.next()) // 1
```

Zatrzyma nawet `for`

```js
function* it() {
  for (let i = 1; i <= 50; i++) {
    yield i // też wykona się tylko jeden raz
  }
}

let iterator = it()

console.log(iterator.next()) // 1

for (let value of iterator) {
  console.log(value) // done: true => koniec pętli
}
```

```js
let it = {
  *[Symbol.iterator]() {
    let numbers = [1, 2, 3, 4, 5]

    for (let number of numbers) {
      yield number
    }
  },
}

for (let value of it) {
}
```

```js
function* range(from, to) {
  let i = from

  while (i <= to) {
    yield i++
  }
}

for (let value of range(2, 13)) {
  // sama wykonuje next()
}
```

Przekazywnie wartości

```js
function* it(number) {
  let result = (yield) + number * 2
  console.log('druga linijka')
  yield result
}

let iterator = it(5)

iterator.next() // value: undefined, done: false
iterator.next(2) // value: 12, done: false
```

Zwracanie generator

```js
function* getRandom() {
  while (true) {
    yield Math.floor(Math.random() * 100) + 1
  }
}

let iterator = getRandom()
let radomNumbers = []

for (let number of iterator) {
  radomNumbers.push(number)

  if (radomNumbers.length === 10) {
    iterator.return() // zakończenie iteratora
  }
}
```

Delegowanie generatorów

```js
function* gen() {
  yield 1

  // delegowanie generatora *
  yield* [2, 3, 4] // zrobi yieldy poszczególnych rzeczy
  yield 5
}

for (let value of gen()) {
  console.log(value)
}
```

```js
*[Symbol.iterator]() {
  for (let model of this.models) {
    yield model
  }
}
```

Wykorzystanie `delegowania` - to samo działanie jak wyżej

```js
*[Symbol.iterator]() {
  yield *this.models
}
```

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

## 12. Map & Set

`Set`:

1. dane muszą być `unikalne`
2. jest bardziej podobny do tablicy

Właściwości `seta`:

1. add
2. delete
3. has
4. clear
5. size

```js
let s = new Set()

s.add('Kuba')
s.add('Anna')

// {'Kuba', 'Anna'}

s.size // 2
```

```js
let person1 = {
  fName: 'Jan',
  lName: 'Kowalski',
}

let person2 = {
  fName: 'Anna',
  lName: 'Nowak',
}

let s = new Set([person1, person2])

s.forEach((val) => console.log(val))
```

```js
let numbers = [1, 2, 1, 0, 3, 5, 1]

function removeDuplicates(arr) {
  return [...new Set(arr)]
}
```

`Weak Set`:

1. można dodawać wyłącznie obiekty
2. w JS wszystko co nie jest wartością prymitywną jest `obiektem`

```js
let person1 = {
  fName: 'Jan',
  lName: 'Kowalski',
}

let person2 = {
  fName: 'Anna',
  lName: 'Nowak',
}

let s = new WeakSet()
s.add(person1)
s.add(person2)
```

`Garbage Collector` - usuwa obiekt z pamięci, a tutaj poniżej wkracza

```js
person1 = null // nie ma już tego obiektu / tracimy referencję
// usunie go także z WeakSetu
```

Zastosowanie `Weak Set` - tylko obiekty utworzone na tej klasie korzystają z tej metody

```js
const people = new WeakSet()

class Person {
  constructor(fName, lName) {
    this.fName = fName
    this.lName = lName

    people.add(this)
  }

  sayHello() {
    if (!people.has(this)) {
      throw new TypeError(
        'Person.prototype.sayHello wywołana na niekompatybilnym obiekcie',
      )
    }
    return `${this.fName} ${this.lName}`
  }
}

let person4 = new Person('Jan', 'Kowalski')

console.log(person4.sayHello()) // Jan Kowalski

let person5 = {
  fName: 'Anna',
  lName: 'Nowak',
}

console.log(Person.prototype.sayHello.call(person5)) // ERROR
```

`Map`:

1. jest bardziej podobny do obiektu

Właściwości:

1. set
2. get
3. delete
4. clear
5. has
6. size

```js
let map = new Map()

map.set('Jan', 'Kowalski')
map.set('Anna', 'Nowak')

// {'Jan' => 'Kowalski', 'Anna' => 'Nowak'}

console.log(map.get('Anna'))
```

`Dodanie danych do obiektu nie modyfikując tego obiektu `metadane``

```js
let person1 = {
  fName: 'Jan',
  lName: 'Kowalski',
}

let person2 = {
  fName: 'Anna',
  lName: 'Nowak',
}

let age = new Map([person1, 32], [person2, 22])

// age.set(person1, 32)
// age.set(person2, 22)
```

`Weak Map` - można utworzyć zmienne prywatne

```js
let person1 = {
  fName: 'Jan',
  lName: 'Kowalski',
}

let person2 = {
  fName: 'Anna',
  lName: 'Nowak',
}

let age = new WeakMap([person1, 32], [person2, 22])

const Person = (function () {
  const privateData = new WeakMap()

  return class Person {
    constructor(fName, lName) {
      privateData.set(this, {
        fName,
        lName,
      })
    }

    sayHello() {
      let data = privateData.get(this)
      return `${data.fName} ${data.lName}`
    }
  }
})()

let person3 = new Person('Jan', 'Kowalski')

person3.fName // undefined

// DZIĘKI TEMU GARBAGE COLLECTOR TEŻ POSPRZĄTA
person3 = null
```

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

## 14. Modules

`script.js`

```js
import Employee from './Employee.js'

const employee = new Employee()
```

`Employee.js`

```js
import Person from './Person.js'
class Employee extends Person {}

export default Employee
```

`Person.js`

```js
import Person from './Person.js'
class Person {}

export default Person
```

Sposoby `Exportu & Importu`

```js
import sort from ''
export default sort
```

```js
import { sort } from ''
export { sort }
```

```js
import { sort as sortedVal, rmDupl } from ''
export { sort as default, removeDuplicates as rmDupl }
```

```js
import sort, { sortedVal } from ''
```

```js
export default function toUpper(text) {
  return text
}
```

```js
export * from ''
```

```js
const URL = 'https://'
const MAX_LENGTH = 1

export { URL, MAX_LENGTH }

import * as config from ''

const { URL } = config
```

`Import` without `Export`

Plik, który robi coś globalnie

```js
import './index.js'
```
