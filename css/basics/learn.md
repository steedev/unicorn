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

<br>

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

<br>

## [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  grid template-rows: repeat(3, 20rem)
}
```

Jeżeli robimy to na całych zakresach to można prościej:

```css
  grid-auto-rows: 10rem;
}
```

<br>

### Podział na kolumny

`Fraction Unit` - rozciąganie w dowolnym miejscu

`repeat(6, 1fr)`

Można używać `gap` & `justify-content`

```css
.item-2 {
  grid-row: span 2;
  grid-column: span 2;
}

/* span - ile ma zająć miejsca */

.item-8 {
  /* gdzie ma się zacząć i kończyć */
  grid-row: 1 / 2;
  grid-column: -1 / span 2;
}
```

```css
grid-template-areas:
  'header header header'
  'content content content'
  'content content content'
  'footer footer footer';

/* itemy muszą mieć ustawiony grid-area */
.item-2 {
  grid-area: content;
}

.item-8 {
  grid-area: header;
}
```

`Niejawne tory` - kiedy elementy się nie mieszczą w wyznaczonym miejscu, muszą się gdzieś znaleźć

<br>

### Wady i zalety Grida

#### ✅ Zalety

- `subgrid`

#### ❌ Wady

- problemy ze `screen readerem` tak samo jak w przypadku flexa / `dostępność jest bardzo ważna`

<br>

## Środowiska uruchomieniowe

### Progressive enhancement

Powiniśmy mieć pewność, że nasze strony html będą czytelne bez `cssa`

Jeżeli `css` czegoś nie rozumie, to ignoruje tę wartość

<br>

### Fallback styles

Style, które są importowane kiedy `mainowe` nie działają

Na początku dajemy wartości dla starych przeglądarek, a potem te nowe, ponieważ nowe przeglądarki to nadpiszą

```css
.visually-hidden {
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
```

<br>

### Prefixes

`Prefixy` są po to, ponieważ różne przeglądarki implementują różne rzeczy w różny sposób

`Składnie są prefixowane` dla danej składni, po to aby developerzy korzystali z tego z rozwagą

Normalnie nasz kod jest `prefixowany` przez `autoprefixery`

Mamy dzięki temu większe szanse, że nasz kod będzie wyglądał dobrze w każdej przeglądarce

Możemy pisać kod intencjonalnie przez co `NIE POWINNIŚMY` samemu pisać `prefixów`

<br>

### Klauzula @supports

`Feauters Querys` - sprawdzanie czy przeglądarka to wspiera

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

```css
.container {
  display: grid;
}

/* Zła praktyka */
@supports not (display: grid) {
  .container {
    display: flex;
  }
}

@supports selector(body:not(.container)) {
}
```

 <br>

### Polyfills

Przeglądarki są w stanie zrozumieć kod, którego nie rozumieją

Piszemy w ten sposób, ale przeglądarki sobie dodają potrzebe rzeczy kiedy rego nie rozumieją

```css
.container:focus-within {
  background: green;
}
```

`Przy pomocy JS dodawane są eventListenery, które robią to samo`

<br>

## CSS Custom properties

### Zmienne

`Nestowanie selektorów` - podawanie kilu na raz

```css
li:nth-child(2),
li:nth-child(4) {
}
```

`:root` - selektor, w którym możemy trzymać nasze zmienne globalne

```css
:root {
  --orange: orange;
  --green: green;
}

.container {
  display: grid;
  box-shadow: var(--orange);
}
```

`Na każdym selektorze jesteśmy w stanie nadpisać te zmienne`

```css
.special {
  --orange: rgb(
    231,
    181,
    86
  ); /* Następuje tu dziedziczenie i w innych miejscach też zmienia się ten kolor wokół tego kontenera */
}
```

`DARK MODE`

```css
.is-dark {
  --orange: orange;
  --white: black;
}
```

```css
.container {
  --columns: 6;
  grid-template-columns: repeat(var(--columns), 1fr);
}

.is-dark {
  --columns: 3;
}
```

<br>

### Semantyczne zastosowanie zmiennych

`grid-auto-flow: dense` - wypełnienie wolnych miejsc wokół elementu

```css
.container {
  display: grid;
  grid-template-columns:
    [start] 1fr [content-start] repeat(3, 1fr)
    [content-end] 1fr [end];
  grid-gap: 0.5rem;
}

.container li {
  grid-column: var(--column-start, auto) / var(--column-end, auto);
}

.item-3 {
  --column-start: 2;
  --column-end: 4;
}
```

<br>

## Preprocesory CSS

### Problemy

Nie da się domyślnie ładować plików scss w przeglądarce

<br>

## SASS w pigułce

### Variables

```scss
@import _variables.scss;
```

Deklaracja zmiennej

```scss
$c-white: white;

:root {
  --white: #{$c-white};
}
```

```scss
.item-1 {
  $item-size: 10rem;
  width: $item-size;
  height: $item-size;
}
```

<br>

## Nesting

`Generyczne selektory` - są niewydajne

`Parrent Selector` - `&`

```scss
.item-1 {
  $item-size: 10rem;
  width: $item-size;
  height: $item-size;

  &:hover {
    background: var(--purple);
  }

  &--special {
    color: black;
  }
}
```

```html
<div class="item-1 item-1--special">Package</div>
```

`Dynamiczne stylowanie klasy`

```html
<body class="is-keyboard-navigating">
  <div class="item-1">Package 1</div>
  <div class="item-2">Package 2</div>
  <div class="item-3">Package 3</div>
  <div class="item-4">Package 4</div>
</body>
```

```scss
.item-2 {
  background: var(--green);

  .is-keyboard-navigating & {
    background: var(--purple);
  }
}
```

<br>

### Loops

`#{i}` - interpolacja

Powstaje fajny gradient

```scss
@for $i from 1 through 6 {
  ul li:nth-child(#{i}) button {
    background: lighten($c-purple, $i * 7%);
  }
}
```

<br>

### Function

```scss
@function powe($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```

<br>

### Extend & Import

```scss
.base {
  display: block;
  margin: 0.5rem;
  background: red;
}

.cta {
  display: block;
  margin: 0.5rem;
  background: red;
}
```

`@extend`

```scss
%base {
  display: block;
  margin: 0.5rem;
  background: red;
}
.modal {
  @extend %base;
}

.input-fiield {
  padding: 2rem;

  // TO NIE DZIAŁA! NIE MOŻNA UŻYWAĆ EXTEND W @MEDIA
  @media screen and (min-width: 600px) {
    @extend %base;
  }
}
```

`@mixing`

```scss
@mixin commonStyle() {
  display: block;
  margin: 0.5rem;
  background: red;
}

@media screen and (min-width: 600px) {
  @include commonStyle();
}
```

`Extendy są lepsze jeżeli nie mimifikujemy i kompresujemy naszego kodu, nie da się ich używać w @media, nie przyjmują parametrów, w przeciwieństwie do mixinów`

```scss
@mixin commonStyle($padding) {
  display: block;
  margin: 0.5rem;
  background: red;
  padding: $padding;
}

@media screen and (min-width: 600px) {
  @include commonStyle(0);
}
```

<br>

### Udostępnianie zmiennych do JavaScript

```scss
$c-orange: orange;
$c-green: green;
$c-blue: blue;

$br-small: 600px;
$br-medium: 1024px;
$br-large: 1600px;

:root {
  --orange: $c-orange;
  --green: $c-green;
  --blue: $c-blue;
}
:export {
  colors: {
    c-orange: $c-orange;
    c-green: $c-green;
    c-blue: $c-blue;
  }
  breakpoint-small: $br-small;
  breakpoint-medium: $br-medium;
  breakpoint-large: $br-large;
}
```

<br>

## Animation

### Transition

Efekt skokowy, dzięki czemu mamy przed i po hoverze, musimy ustawić animację na main elemencie

```css
.circle {
  transition: 0.7s background ease-in-out;
  transition-delay: 1s;
  transition-property: background, border-radius;
}

.circle:hover {
  border-radius: 0;
}
```

<br>

### @keyframes

```css
.circle {
  animation-name: pulse;
  animation-duration: 1s;
  animation-timing-function: linear;

  /* zacznie się na początku */
  animation-play-state: running;

  /* zatrzymanie w końcowym momencie */
  animation-fill-mode: both;

  animation-teration-count: infinite;
}

@keyframes pulse {
  0% {
    width: 6rem;
  }

  50% {
    width: 12rem;
  }

  100% {
    width: 6rem;
  }
}

/* @keyframes pulse {
  from {
    width: 6rem;
  }

  to {
    width: 12rem;
  }
} */
```

<br>

### Timming functions and curves

`bucic-bezier(.03, 1.04, .93, -0.45)`

<br>

## Performance CSS

`Emmet`:

.container>ul>li.item-$\*12>button{Click me please ($)}

<br>

### Complex selectors

`Jest to niewydajne!!!`

```css
ul {
}

button {
}
```

```css
/* Tu jest wyższe specificity */
.container > ul > li:nth-child(7) > button {
  background: var(--green);
}

.item-7 button {
  background: var(--yellow);
}
```

`Tu jest większa wydajność, ponieważ silnik tak nie podróżuje`

```css
.item-7__button {
  background: var(--yellow);
}
```

`TO JEST NAJGORSZY SELEKTOR!!!`

```css
.container > ul > li:nth-child(7) > button > * {
}
```

`SOLUTION:`

Stylowanie za pomocą nadawania konkretnym elementom odpowiadającym im klass

<br>

### Will change

`Nie powinniśmy` pisać tego w samym CSS, do tzw. przedwczesnych animacji, jeżeli nam się coś wydaje to nie jesteśmy tego pewni. Jeżeli nie ma problemu z performancem na stronie `nie używamy go!`

`Tak szybko jak ta animacja się wykona powinniśmy go zdjąć!`

```css
.circle {
  /* Tutaj jest animacja */

  will-change: width, height, border-radius;
}

.circle:hover {
  will-change: none;
}
```

`Płynniejsza / wydajniejsza` animacja z użyciem `scale`:

```css
.circle {
  transition-property: transform;
  transform: scale(1);
}

.circle:hover {
  transform: scale(100);
}
```

<br>

### Layout paint / shift

`Nie powinniśmy` animować właściwości `top, bottom (...)`, ponieważ wtedy używany jest `repainting`

Animacja za pomocą `translate()`, robi to samo, a jest wydajniejsza, ponieważ wykorzystuje do tego `GPU`

Debugowanie w zakładce `Rendering`

<br>

### Odchudzanie CSS'a

[Purifycss](https://purifycss.online/)

Podobnież Google patrzy na nieużywany CSS

`SEO` (czyli z ang. Search Engine Optimization) to proces budowania ruchu z organicznych wyników wyszukiwania. Opiera się na optymalizacji stron pod kątem silnika wyszukiwania (np. algorytmów Google)

<br>

## Fonts

### Import

Ładowanie czcionek

```css
@font-face {
  font-display: swap; /* Nie będzie tego mrugnięcia na początku */
}
```

`Font Shorthand`

```css
.content {
  font: 400 1rem 'Roboto', sans-serif;
}
```

<br>

### Iconic Font

`Font Awesome` używa formatu `wektorowego SVG`

```
<span> jest lepszy do wstawiania Iconic niż <i>, ponieważ nie generuje problemów z semantycznością
```

<br>

### Font Subsetting - grube działo optymalizacji / Glyphhanger

Pozbywanie się elementów, których się nie używa

`Mimifikacja` - optymalizacja poprzez usuwanie kodu

Jeżeli na stronie nie ma `ą` to zostanie usunięty z tego fontfile, jednak nie możemy tego używać na podstronach, bo tam `ą` może wystąpić

<br>

## Features

### Position Absolute

Wyrzucenie elementu z jego naturalnego flow

Działa dla konkretnego elementu dopóki pozycjonowanie rodzica jest inne niż static

<br>

### Odczytywanie atrybutów z poziomu CSS'a

```html
<button class="cta" data-tooltips="Hidden text!">Hello world</button>
```

```css
.cta::before {
  display: inline-block;
  content: attr(data-tooltip);
}
```

<br>

### [Procenty](https://wattenberger.com/blog/css-percents)

<br>

### CSS counters

```css
.container {
  counter-reset: places-count;
}

.container li::before {
  counter-increment: places-count;
  content: counter(places-count) '. ';
  color: var(-green);
}
```

<br>

### Relative selectors

```css
input:checked + label::before,
input:checked ~ label::before,
input:hover ~ label::before {
  color: var(--orange);
}
```

<br>

### Focus styles

`Outline` znajduje się na wszystkich elementach `fokusyjnych`

```css
input:focus {
  background: #ddd;
}
```

`Usuwanie outline bez alternatywy jest błędem developerskim`

<br>

### CSS Shapes

`Floaty` zostały stworzone do opływania tekstu, a `nie do pozycjonowania`

```css
.is-tomato {
  max-width: 10rem;
  float: left;
  shape-outside: circle();
}
```

<br>

### Filter

```css
img {
  filter: blur(1px);
  filter: hue-rotate(-45deg);
}
```

Prosty `Dark Mode`

```css
html {
  filter: invert(1);
}

body {
  background: white;
  color: black;
}
```

<br>

### Pobieranie wartości systemowych

```css
@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
}
```

<br>

## CSS Architecture

### BEM

1. Nie narzuca konwencji nazewniczej
2. Rozdzilanie elementów na bloki

<br>

`Podział`:

1. `.block` - pierwsze słowo w nazwie oznacza, że klasa dotyczy danego bloku
2. `__element` - słowo poprzedzone dwoma “podkreślnikami” oznacza, że dana klasa dotyczy danego elementu
3. `--modifier` - słowo poprzedzone dwoma myślnikami określa kasę będącą modyfikatorem

<br>

### OOCSS

1. Podział na strukturę

```css
.flag {
}

.flag-vertical {
}

.flag-horizontal {
}

.flag-it {
}

.flag-fr {
}

.flag-pl {
}
```
