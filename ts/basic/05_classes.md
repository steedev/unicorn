# 5. Classes

```js
function Movie() {
  // ...
}

Movie(); // undefined
new Movie(); // Movie {}
```

```ts
function Movie(title) {
  this.title = title;
}

Movie.prototype.getTitle = function () {
  return this.title;
};

const bestMovieEver = new Movie("Peaceful Warrior");
```

`Lepszy zapis klasy i działanie prototypu na klasach w porównaniu do funkcji`

```ts
class Movie {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  // To trafia automatycznie do prototypu klasy Movie
  getTitle(): string {
    return this.title;
  }
}

const bestMovieEver = new Movie("Peaceful Warrior");
```

`Zapis ze słowem private, aby nie powtarzać kodu`

```ts
class Movie {
  constructor(private title: string) {}

  getTitle(): string {
    return this.title;
  }
}

const bestMovieEver = new Movie("Peaceful Warrior");
```

## Enkapsulacja / Hermetyzacja

```ts
// public - anyone can access
// private - available only inside a class
// protected - available inside a class and subclasses [ inheritance ]
// readonly - property can't be modified
// static - is available directly from class ( without instantiation )

class Movie {
  // Ta właściwość jest dostępna poza klasą bez konieczności tworzenia nowej instancji
  static type = "movie";

  constructor(private readonly title: string) {}

  getTitle(): string {
    return this.title;
  }
}

console.log(Movie.type); // movie
```

## Gettery & Settery

```ts
// W ES3 NIE SĄ WSPIERANE
class Movie {
  // _ konwencja getterów i setterów - Accessory
  constructor(private _title: string) {}

  set title(title: string) {
    this._title = title;
  }

  get title() {
    return this._title.toUpperCase();
  }
}

const bestMovieEver = new Movie("Peaceful Warrior");
bestMovieEver.title; // PEACEFUL WARRIOR
bestMovieEver.title = "Updated";
bestMovieEver.title; // UPDATED
```

## Dziedziczenie - lepiej korzystać z kompozycji niż z dziedziczenia

```ts
class Media {
  public progress = 0;

  constructor(
    public name: string,
    public readonly type: string,
    public readonly genre: string,
    public readonly duration: number,
  ) {}

  play() {
    this.progress += 1;
  }
}

class Movie extends Media {
  constructor(name: string, genre: string, duration: number) {
    super(name, "movie", genre, duration);
  }
}
class Song extends Media {
  constructor(name: string, genre: string, duration: number) {
    super(name, "song", genre, duration);
  }
}

const bestMovieEver = new Movie("Peaceful Warrior", "Drama", 7200);
const bestsongEver = new Song("Heart of Courage", "Cinematic", 117);

console.log(bestMovieEver);
console.log(bestsongEver);

Movie {
  name: "Peaceful Warrior",
  type: "movie",
  genre: "Drama",
  duration: 7200,
  progress: 0
}
Song {
  name: "Heart of Courage",
  type: "song",
  genre: "Cinematic",
  duration: 117,
  progress: 0
}
```

## Abstrakcja - chcemy po niej dziedziczyć, ale nie chcemy po niej tworzyć nowych obiektów

```ts
abstract class Media {
  public progress = 0;

  constructor(
    public name: string,
    public readonly type: string,
```
