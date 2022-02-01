## 1. Zmiany w nazwach

`Hoisting` - wynoszenie zmiennych na górę zakresu

```js
// tylko funkcje mogą tworzyć nowy zakres zmiennych
const a // wyniesienie zmiennej / funkcji też
console.log(a) // undefined
a = 5
console.log(a) // 5

// zmienna globalna w przeglądarce jest obiektem windows
var firstName = "Jan" === window.firstName = "Jan"
```

Zmienna `let`:

1. nie korzysta z Hoistingu
2. jest prywatna w utworzonym zakresie
3. nie da się jej zadeklarować jeszcze raz

Wszystko co jest nad deklaracją zmiennej jest określane jako `TemporalDeadZone`
