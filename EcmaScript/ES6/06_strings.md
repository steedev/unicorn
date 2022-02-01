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
