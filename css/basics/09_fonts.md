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
