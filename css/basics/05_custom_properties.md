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

```css {
  .special {
    --orange: rgb(231, 181, 86) /* Następuje tu dziedziczenie i w innych miejscach też zmienia się ten kolor wokół tego kontenera */
  }
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
