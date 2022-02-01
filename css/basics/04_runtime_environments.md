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
