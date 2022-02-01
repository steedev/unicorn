## Wstęp

1. `Kaskadowość` - zasada, który styl ma być użyty
2. `Specificity` - mechanizm rozwiązywania konfliktów i aplikowania najsilniejszych właściwości

- `1` - pseudoelementy, selektory tagów
- `10` - klasy, pseudoklasy
- `100` - ID
- `1000` - inline

Podbicie wartości selektora 4-krotnie

```css
.box.box.box.box {
}
```

`Nadpisanie wartości` - ignorancja specificity

```css
div {
  background: red !important;
}
```

<br>

### Różne tryby wyświetlania

Domyślnie każdy element ma swój specyficzny display np: div ma display: block, span jako inline

`Inline` - nie aplikuje wysokości i szerokości

`Elementy blokowe są zawsze szerokie na 100%`

`Nie powinniśmy zmieniać display tabelek, normalnie ma display: table`

<br>

### Box Model

Domyślnie box model zawiera margin i padding

Teraz ten element ma 200px - trzeba sobie to odjąć, ogl nie polecam

```css
width: 100px;
padding: 0 50px;
```

Ma 200px, ale border-box sobie sam odejmuje ten margin, padding, border

```css
width: 200px;
padding: 0 50px;
box-sizing: border-box;
```

Padding i border są dodawane do szerokości

```css
box-sizing: content-box;
```

<br>

### Warstwy

`z-index` - pozwala ustawiać elementy w górę lub w dół, przydatne w modalach

Jeżeli `z-indexy` są równe o tym jak ustawią się warstwy decycuje markup z pozycjonowaniem absolutnym

`Stacking Context` - nakładanie się na siebie warstw

<br>

### CSS Units

`Absolutne` - przydatne w druku

1. `px`
2. `in` [cale]
3. `cm`

`Względne`

1. `rem` - jednostka względna do roota

```css
html,
body {
  font-size: 24px;
}
```

`remy` wtedy też się skalują jak byśmy do zmienili _odnosi się do rozmiaru czcionki_

2. `em` - są względne do swojego nadrzędnego elementu

```html
<div class="box">
  This is outer text
  <div class="inner-box">This is inner text</div>
</div>
```

```css
html {
  font-size: 24px;
}

.box {
  font-size: 1.5em; //36px
}

.inner-box {
  font-size: 2em; // 72px / jest 2x większe niż .box font
}
```

W większości przeglądarek default font to `16px`

3. `ex` - wysokość litery `x` w danym foncie
4. `ch` - szerokość cyfry `0` w danym foncie

<br>

### ViewPort - przestrzeń, w której przeglądarka może renderować

1. `vw` - szerokość
2. `vh` - wysokość
3. `vmin` - jeśli szerokość okna jest mniejsza niż wysokość, to wtedy brana jest jego szerokość i na odwrót
4. `vmax` - jeśli szerokośc okna jest mniejsza niż wysokość to brana jest jego wysokość i na odwrót

<br>

### Media Queries

```css
@media screen and (max-width: 600px) {
  .box {
    width: 100%;
  }
}
```

`Mobile First` - podejście w stylowaniu pod zmianę stylów na desktopowych rozdzielczościach, piszemy pod tel
