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
