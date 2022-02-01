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
