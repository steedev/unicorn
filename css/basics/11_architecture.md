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
