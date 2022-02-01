# 1. TypeScript Introduction

## Czym jest?

1. `Nadzbiór języka` / rozszerzenie `JavaScript`, stworzony przez `Microsoft`
2. Wprowadzenie `statycznego` typowania
3. Możemy korzystać z `Intellisens`, dzięki czemu nasz edytor staje się mądrzejszy

```ts
import * as R from 'ramda'

R. // No suggestions.
```

`SOLUTION`

```
yarn add @types/ramda
```

4. Nowe funkcje szybciej implementowane są do `TypeScriptu`
5. Jest `transpilowany` do `JavaScriptu`

<br>

### Podstawy składni

```ts
// Variable types
let counter: number;
let text: string;
let logic: boolean;

text = 'Lorem ipsum';

// Arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Functions
const play = function (song: string): boolean {
  console.log(`Playing ${song}`);
  return true;
};

//Interfaces
interface Coords {
  x: number;
  y: number;
}

function setPosition(position: Coords) {
  return `Current position is set to: ${position}`;
}

setPosition({ x: 1, y: 3 });

// Decorators
function Rocket() {}

class Member {
  @Rocket()
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const newMember = new Member('Adam');

// Mapped types / TypeScript documentation
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

<br>

### JS 💔

```js
let x = 10;
let y = x;

y = 2; // 2
x; // 10

let obj = {};
let refObj = obj;

obj.id = 123;
console.log(refObj.id); // 123
obj === refObj; // true

let data = {};
let moreData = {};
data === moreData; // false
```

`Referencyjne typy danych w JS to:`

1. Obiekty
2. Tablice
3. funkcje

```js
null == undefined; // true

// Nie musimy się tu martwić o Falsy Values
0 == undefined; // false
false == undefined; // false

globalVar != 'undefined'; // globalVar is not defined
typeof globalVar !== 'undefined'; // true
```

Do porównania zmiennych korzystamy z `operatora ścisłego porównania [===]`

`WYJĄTEK` stanowią sytuacje kiedy porównujemy zmienne do `null & undefined`

`Closure`

```js
function outer() {
  const outsideScopeVar = 'out of the box';
  function inner() {
    return outsideScopeVar;
  }

  return inner;
}

const getInner = outer();
getInner(); // out of the box
```

`BANG BANG 💣`

`!!` - informacja o tym jak zachowuje się zmienna w kontekście logicznym

```js
!!''; // false
!!0; // false
!!NaN; // false
!!null; // false
!!undefined; // false
!!{}; // true
!![]; // true
```

<br>

### ESNext

Kompatybilność w najnowszymi rzeczami

```js
function manyParams(x, y, ...rest) {
  console.log(x, y, rest);
}

const args = [6, 7, 8, 9];
// manyParams(args)
manyParams(...args);
```
