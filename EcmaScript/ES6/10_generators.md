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
