## DOM

`DOM` - Obiektowy Model Dokumentu

`BOM API` - Browser Object Model API

`window.navigator` - informacje o platformie

`window.screen` - informacje o ekranie

`window.location` - informacje o pasku adresu

<br>

`Wyszukiwanie w DOM`

```js
// dostaniemy referencję do obiektu albo null
const container = document.querySelector('#container') // zawsze zwróci jeden obiekt / ten pierwszy

// dostaniemy kolekcję obiekt klasy NodeList, lub pustą kolekcję
const allParagraphs = document.querySelectorAll('p')

// na każdym elemencie jest dostępna metoda querySelector

const input = form.querySelector("[name='firstName']")

document.forms // zwróci wszystkie formularze
document.images
document.links

document.body
```

<br>

`Tworzenie elementów`

```js
const div = document.createElement('div')

const img = new Image() // nie ma powodu, żeby z tego korzystać

const text = document.createTextNode('treść') // element tekstowy
```

<br>

`Wstawianie elementów na stronę`

```js
const list1 = document.querySelector('#list1')

const li = document.createElement('li')
const text = document.createTextNode('Treść')

li.appendChild(text) // starsza metoda
list1.append(li)

document.querySelector('#list2').append(li) // przeniesienie w inne miejsce

// prepend - doda element na początku
// before - totalnie przed
// after - totalnie po

list1.querySelector(':last-child').remove() // usunięcie ostatniego
```

<br>

`Sposób na zwiększenie wydajności renderowania tworzonych elementów`

```js
const dc = document.createDocumentFragment()

for (let i = 0; i < 5; i++) {
  const li = document.createElement('li')
  li.append(document.createTextNode(`${i + 1}`))
  dc.append(li)
}
list.append(dc)
```

<br>

`Relacje między elementami`

```js
const children = list.chlidNodes // zwraca wszystkie węzły, nawet komentarze

const elementsChildren = list.children // zwraca tylko elementy html

const first = list.firstChild // pierwsze dziecko
const firstElement = list.firstElementChild

const last = last.lastChild
const lastElement = list.lastElementChild

const second = firstElement.nextSibling
const secondElement = firstElement.nextElementSibling
```

<br>

`Praca z atrybutami`

```js
const link = document.querySelector('.link')

const href = link.getAttribute('href')

link.setAttribute('target', '_blank')

link.removeAttribute('class')

button.setAttribute('disabled', true)
```

<br>

`Odczytywanie & ustawianie treści`

```js
const container = document.querySelector('.container')

container.innerHTML // zwróci html w stringu
container.innerHTML = `<h1>hello world</h1>`

const p = document.querySelector('p')

// nie zwraca uwagi na elementy html
p.textContent = 'hello world' // do pracy tylko z tekstem

container.outerHTML // zwraca wszystko
```

<br>

`Wartości pól formularza`

```js
const form = document.querySelector('#myForm')

// wartości pól 'name' kierują na te pola bezpośrednio
form.firstName

form.lastName = 'Kowalski'

form.subject.value = 'zgloszenie'
```

<br>

`Praca z klasami CSS`

```js
const link = document.querySelector('.link')

link.classList.add('red', 'green') // funkcja przyjmuje parametry jako klasy

link.classList.remove('red')

link.classList.toggle('green') // jeżeli klasy nie ma, to zostanie dodana, kiedy jest zostane usunięta

link.classList.contains('green')
```

<br>

`Praca z liniowym CSS`

```js
h1.style.color = 'red'

h1.style['font-size'] === h1.style.fontSize

// przypisanie całego kodu CSS
container.style.cssText = ''

link.style.display // odczytanie wartości bloku

window.getComputedStyle(link).color // zwraca wszystkie style
```

<br>

`Współrzędne położenia elementu`

```js
box.offsetLeft // położenie od lewej krawędzi względem offsetParent

box.getBoundingClientRect() // położenie względem ViewPortu
```

<br>

`Odczytywanie wymiarów elementów`

```js
box.offestWidth // uwzględnia padding, margin, border, scroll
box.clientWidth // nie jest uwzględniany padding, margin, border

box.scrollHeight // fizyczna długość elementu

window.innerWidth
window.innerHeight
```

<br>

`Pozycje suwaków`

```js
box.scrollTop
box.scrollLeft

window.scrollTo(x, y) // przewijanie do podanych wartości
window.scrollBy(0, -100)
```

<br>

`Zdarzenia`

```html
<!-- TAK NIE RÓB -->
<button onlick="sayHello()">Click me!</button>
```

```js
function sayHello() {
  alert('Hej!')
}

// pomysł ogólnie do dupy
btn2.onclick = sayHello // tak wywołujemy, bo tak (), to ona coś zwraca

// nie ma możliwości odbindowania funkcji anonimowej
btn3.addEventListener('click', sayHello, false)
btn3.removeEventListener('click', sayHello)
```

<br>

`Obiekt event & target`

```js
btn2.addEventListener('click', function (e) {
  e.target.setAttribute('disabled', true)
})

// doda target do tego konkretnego elementu, btn3
btn3.addEventListener('click', function (e) {
  e.currentTarget.setAttribute('disabled', true)
})

document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('button')) {
    console.log('Button clicked!')
  }
})

btn4.addEventListener('click', (e) => {
  /* tutaj this nie kieruje na to samo co e.target */
})
```

<br>

`Bubbling`

Przypisanie zdarzenia do przycisku wykona funkcję i będzie `bablowało` w górę wywołując funkcje rodziców

```js
btn.addEventListener('click', function (e) {
  e.stopPropagation() // zablokowanie bubblingu w górę

  e.stopImmediatePropagation() // zablokowanie też innych funkcji
})

btn.addEventListener('click', function (e) {
  console.log('Kliknąłeś ponownie!')
})
```

<br>

`Capturing` - proces odwrotny do `bubblingu`

```js
// zamienia na odwrót wywołania tych eventów
btn.addEventListener('click', function (e) {}, true)
```

<br>

`Zapobieganie domyślnej akcji przeglądarki`

```js
form.addEventListener('submit', function (e) {
  e.preventDefault() // zablokowanie domyślnej akcji przeglądarki
})

form.querySelector('#firstName').addEventlistener('keypress', function (e) {
  if (String.fromCharCode(e.charCode) === 'a') {
    e.preventDefault()
  }
})
```

<br>

`Zdarzenie DOMContentLoaded & Load`

```js
const img = document.querySelector('img')

// gdy ustawimy ładowanie zasobów na slow, to dostaniemy 0x0, ponieważ strona się nie wczytała, a skrypt pobrał wartość wymiarów

// SOLUTION kiedy się już załaduje strona
window.addEventListener('load', function () {
  console.log(`Wymiary obrazka to: ${img.ofsetWidth}x${img.offsetHeight}px`)
})
```

```js
document.addEventListener('DOMContentLoaded', function () {
  const h1 = document.querySelector('h1')
  console.log(h1.textContent)
})
```
