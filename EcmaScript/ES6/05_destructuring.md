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
