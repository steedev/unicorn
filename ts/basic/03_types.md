# 3. Types

## Enum

Zbiór nazwanych określonych wartości liczbowych

```ts
enum ExtensionType {
  doc,
  docx,
  pdf,
}

ExtensionType.docx; // 1
```

```ts
const enum SubscriptionStatus {
  active,
  expired,
}

function getSubscriptions(status: SubscriptionStatus) {
  switch (status) {
    case SubscriptionStatus.active:
      return ['(active subscriptions)'];
    case SubscriptionStatus.expired:
      return ['(expired subscriptions)'];
  }
}

function getSubscriptions(status: SubscriptionStatus) {
  switch (status) {
    case 0:
      return ['(active subscriptions)'];
    case 1:
      return ['(expired subscriptions)'];
  }
}
```

<br>

## Intersection & Union Types

Te wartości nie są mapowane do liczb

```ts
let coffeeSize: 'medium' | 'large';

coffeeSize = 'small'; // ERROR
```

`Union Type`

```ts
type doubleAnything = string | number;

function double(value: doubleAnything): number {
  if (typeof value === 'string') {
    return parseInt(value, 10) * 2;
  }

  return value * 2;
}
```

```ts
// Unknown values
type maybeValue = string | undefined;
let valuefromDOM;

function show(value: maybeValue) {
  return value;
}
```

<br>

## Asertion & Aliases

`Asercja` - informowanie o typie. Asercja jest `rzutowaniem typów`, ale nie w `100%`, ponieważ TS nie wykonuje dodatkowej weryfikacji tych typów tylko nam ufa

- `<Game>`
- `as Game`

```ts
type Game = { title: string; genre: string; released: boolean };

const game: Game = {
  title: 'Grand Theft Auto V',
  genre: 'Action',
  released: true,
};
const serializedGame = JSON.stringify(game);

const gameObj = JSON.parse(serializedGame) as Game;
gameObj.genre; // now TS helps
```

```ts
const input = <HTMLInputElement>document.querySelector('.input');
input.value;
```

`Aliasy`

```ts
type NumberAlias = number;
type CoffeeSize = 'medium' | 'large';
let coffeeSize: CoffeeSize;

function order(coffee: CoffeeSize) {
  return `Ordered ${coffee}`;
}
```
