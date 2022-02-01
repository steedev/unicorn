# 6. Interfaces

```ts
/* Type aliases vs Interface

1. Interfejsy tworzą nazwę typu
*/

type Player = {
  name: string;
};

function show(player: Player) {} // otrzymuje informacje o całej strukturze

interface Game {
  name: string;
}

function play(game: Game) {} // mam tylko nazwe interfejsu

// computed properties
type Types = "finite" | "infinite";

type Games = {
  [type in Types]: string;
};

/*
type Games = {
    finite: string;
    infinite: string;
}
*/

// Merge
interface User {
  name: string;
}

interface User {
  email: string;
}

function info(user: User) {}
info({ name: "Kuba", email: "kuba@eduweb.pl" });

// Extends
interface Admin extends User {
  is_admin: boolean;
  specialpowers?: boolean;
}

// Extends multiple
interface Superadmin extends Admin, User {
  godmode: boolean;
}

// Typescript do ustalania typów wykorzystuje Duck Typing or Structural Typing

// Duck typing // structural typing
interface Readable {
  pages: number;
}

interface Book {
  pages: number;
  title: string;
}

const book: Book = {
  pages: 5,
  title: "The one thing",
};

function read(something: Readable) {
  return `Started reading ${something.pages} pages`;
}

// Tutaj mamy typ Book, a oczekujemy typu Readable, książka jest w końcu czymś co da się przeczytać, ale 100% type Readable NIE JEST
read(book); // Started reading 5 pages
```

## Functions Interfaces

```ts
interface Playable {
  name: string;
  play?(): string;
}

interface Play {
  (media: Playable): string;
}

let playMedia: Play;
playMedia = function play(media: Playable): string {
  if (media.play) {
    return media.play();
  }

  return `Can't play ${media.name}`;
};

const movie: Playable = {
  name: "Lord of the Rings",
  play() {
    return `Playing ${this.name}`;
  },
};

playMedia(movie); // Playing Lord of the Rings
```

## Classes Interfaces

```ts
interface Playable {
  name: string;
  play(): string;
}

class Movie implements Playable {
  constructor(public name: string) {}

  play() {
    return `Playing ${this.name}`;
  }
}

function play(media: Playable) {
  return media.play();
}

const movie = new Movie("Lord of the Rings");

play(movie); // Playing Lord of the Rings
```
