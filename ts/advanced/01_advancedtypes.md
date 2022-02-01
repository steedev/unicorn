# 1. Advanced Types

## This

`Which object call function?`

1. Is the function called by new?
2. Is the function called by call(), apply() or bind()?
3. Is the function called as a method, ie: obj.func()?
4. Is the function called in the global scope?

5. If strict mode is enabled, return undefined
6. Otherwise, return the global object, ie: window

```ts
function simpleCall() {
  return this;
}

simpleCall(); // NODE - global // DENO - undefined

// Constructor
function withNew() {
  this;
}

new withNew(); // withNew {}

// Method Call
class newClass {
  method() {
    return this;
  }
}

const newObj = new newClass();
const method = newObj.method;

// Kontekst wstakzuje na miejsce wywołania funkcji
method(); // undefined
```

```ts
function outsideTheClass(cb) {
  return cb();
}

// Method Call
class newClass {
  method() {
    return outsideTheClass(function () {
      return this;
    });
  }
}

const newObj = new newClass();
newObj.method(); // undefined
```

```ts
return outsideTheClass(() => {
  return this;
});
```

```ts
const newObj = new newClass();
newObj.method(); // newClass {}
```

```ts
// custom
function customThis() {
  return this;
}

const obj = { x: 1 };
const bounded = customThis.bind(obj);
bounded(); // { x: 1 }
```

## Typing this

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

```ts
interface User {
  name: string;
  introduce: () => Function;
}

const user: User = {
  name: "Kuba",
  introduce() {
    return () => {
      return `I'm ${this.name}!`;
    };
  },
};

const sayHello = user.introduce();
console.log(sayHello());
```

```ts
const link = document.querySelector(".link");

function navigate(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log(this.href);
}
```

## Generic Types
