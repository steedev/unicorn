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
