## [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Działa na zasadzie `rodzic - dziecko`

`Stylujemy tylko element rodzica`

```css
flex-direction: row / column
flex-wrap: wrap - złamanie linii / nowy wiersz
justify-content: flex-start / center
align-items: center
```

<br>

### Main axis & Cross axis

Flexbox działa w `main axis` & `cross axis`
`flex-direction` - definiuje te osie

Problem flexboxa w kontekście dostępności kiedy damy row-reverse, w html będzie na odwrót

`Wartości względne dla konkretnej osi:`

```css
justify-content: center;
align-content: center;
align-items: center;
```

`row / column` - zmienia main axis z cross axis, a:

`justify-content` - wyrównuje elementy wzdłuż main axis

`align-items` - wzdłuż cross axis

`align-content` - wiersze są ściśnięte

`align-items` - pojedyncze dzieci są wycentrowane

<br>

### Rozmiary względne

Początkowo nie zmieniają nic - operują na `dostępnej przestrzeni`

`Trzeba je ustawić na elementach flexa`

```css
flex-grow: 0;
flex-shrink: 1;
```

4 element

```css
.container > div:nth-child(4) {
  flex-grow: 1;
}
```

Podział w stosunku `2:1`, podział na 3 kawałki

```css
flex-grow: 2;
flex-grow: 1;
```

Wyłączenie `shrinka` - ten element nie będzie się zwężał

```css
flex-shrink: 0;
```

Przydatne do elementów, które mają mieć cały czas stały rozmiar

<br>

### Wady i zalety Flexboxa

#### ✅ Zalety

- dobre wsparcie na starszych przeglądarkach, w przeciwieństwie do grida

- zmiana `orderu`

- tworzenie layoutów na podstawie treści, w gridzie są rows & columns

- właściwość `gap` - odstęp między elementami

#### ❌ Wady

- niejawne problemy z dostępnością, row-reverse -> markup pozostaje bez zmian
