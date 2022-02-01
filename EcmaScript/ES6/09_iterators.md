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
