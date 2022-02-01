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
