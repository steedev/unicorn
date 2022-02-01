# Asynchroniczność

`JavaScript` działa jednowątkowo

## Paradygmaty programowania funkcyjnego

<br>

### Higher Order Function

```js
const modify = (x, action) => action(x)

// Funkcja jako argument
modify(5, (x) => x * 2) // 10 // czysta funkcja
```

W `JavaScript` funkcje to są traktowane jako `first class object`

`Higher Order Function`:

1. Przyjmuje jedną lub więcej funkcji
2. Zwraca funkcję

<br>

### Currying

Odkładamy wywołanie funkcji tak długo, aż nie skompletujemy wszystkich potrzebnych parametrów do jej działania

```js
const curr = (x) => (y) => x + y
curr(5)(4)
```

<br>

### Pure functions

Typy złożone są `przekazywane poprzez referencję!!!`

`Funkcja nie jest czysta` - nawet kiedy wywołujemy ją dla tych samych wartości ona zwraca inny wynik

`Czysta funkcja` - zawsze zwraca ten sam wynik dla konkretnego parametru

```js
const nums = [1, 2, 3]
const impure = (arr) => {
  arr.forEach((item, index) => (arr[index] = item * new Date()))
}
```

<br>

##

### Event loop

Kod JS jest wykonywany i jest możliwa asynchroniczność

```js
function task1() {
  console.log('task 1')
  return task2()
}

function task2() {
  console.log('task 2')
  return task3()
}

function task3() {
  console.log('task 3')
  return task4()
}

function task4() {
  return 'done'
}

task1()
```

Pierwsza funkcja niby pierwsza, a skończy się ostatnia. Kolejne funkcje trafiają kolejno do stosu i czekają na wykonanie. Działa trochę jak rekurencja

W momencie kiedy funkcja jest asynchroniczna (setTimeout, odczyt pliku, zapytanie do serwera) trafia do `WEB API`, gdzie oczekuje na swoje wykonanie

<br>

### Czym jest Callback

```js
const multiply = (x, y) => x * y

multiply(5, 4)

const ref = multiply // referencja

ref(2, 4) // funkcja multiply z inną referencją

const duble = (x, callback) => callback(x, 2) // Higher Order Function

// Callback #1
double(5, multiply)

// Callback #2
const arr = [1, 2, 3]
arr.filter((i) => i % 2)

// Callback #3
btn.addEventListener('click', () => {
  console.log('Clicked!')
})
```

<br>

### Currying

Zamieniamy funkcję w ten sposób abyśmy mogli przekazywać argumenty pojedynczo

```js
const add = function (a, b) {
  return a + b
}

add(3, 5)

const currying = function getA(a) {
  return function getB(b) {
    return a + b
  }
}

const part1 = currying(5)
const part2 = part1(3)

const curry = currying(5)(3)
```

```js
const name = 'ditto'

request(`https://pokeapi.co/api/v2/pokemon/${name}`, (err, res, body) => {
  if (err) console.lor(err)

  const pokemonData = JSON.parse(body)
  // showPokemon(pokemonData)

  const typeUrl = pokemonData.types[0].type.url

  request(typeUrl, (err, res, body) => {
    if (err) console.lor(err)

    const type = JSON.parse(body)

    // CALLBACK HELL !!!

    // Te informacje docierają do nas w formie takiego wodospadu
  })
})
```

<br>

### Promise

```js
const promise = new Promise((resolve, reject) => {
  resolve('ok') // change status to fullfield
  reject(error) // change status to rejected
})

// Zostanie uruchomiona gdy:
promise.then() // obietnica zostanie zakończona wywołaniem pierwszego callbacku
promise.catch() // obietnica zostanie odrzucona
promise.finally() // zawsze zostanie uruchomiona
```

```js
const getPokemon = (name) => {
  return new Promise((resolve, reject) => {
    request(`https://pokeapi.co/api/v2/pokemon/${name}`, (err, res, body) => {
      if (err) {
        reject(err)
      }

      resolve(JSON.parse(body))
    })
  })
}

getPokemon('ditto')
  .then((pokemon) => {
    const typeUrl = pokemon.types[0].type.url

    getType(typeUrl)
      .then((type) => {
        console.log(type)
      })
      .catch((err) => console.log(err))

    return {
      ...pokemon,
      value: 5,
    }
  })
  .catch((err) => console.log(err))
```

```js
Promise.all([getPokemon('ditto')], getPokemon('pikachu')).then((pokemons) => {
  // kiedy wszystkie zostaną rozwiązane pomyślnie
})
```

<br>

### async & await

```js
;(async () => {
  try {
    const name = 'dittoe'
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    if (!data.ok) {
      throw new Error(data.statusText)
    }

    const pokemon = await data.json()
    console.log(pokemon)
  } catch (err) {
    console.log(err.message)
  }
})()
```

```js
;(async () => {
  const name = 'dittoe'

  const getPokemon = async (name) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await data.json()
  }

  const pokemon = await getPokemon(name).catch((err) => {
    console.log(err.message)
  })
  pokemon?.name
})()
```

```js
;(async () => {
  const name = 'dittoe'

  const handleError =
    (fn) =>
    (...params) =>
      fn(...params).catch((err) => {
        console.log(err.message)
      })

  const getPokemon = handleError(async (name) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await data.json()
  })

  const pokemon = await getPokemon(name)
  pokemon?.name
})()
```
