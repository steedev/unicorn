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
