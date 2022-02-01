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
