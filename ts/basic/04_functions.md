# 4. Functions

## Parameter types

```ts
type Song = { title: string; duration: number; genre: string };
const song = { title: 'Eye of the tiger', duration: 213, genre: 'rock' };

function play(song: Song) {
  return `Playing now: ${song.title}`;
}

play(song);
```

## Optional parameters

```ts
function addToPlaylist(song: Song, playlist: string = 'Default') {
  return `Added ${song.title} to playlist: ${playlist}`;
}

addToPlaylist(song);
```

## Function expression & Function Types

```ts
const numberToText: (num: number) => string;

numberToText = (num) => num.toString();
numberToText(5);

type Song = { id: number; title: string; duration: number; genre: string };
const songs: Song[] = [
  { id: 1, title: 'a', duration: 1, genre: 'rock' },
  { id: 2, title: 'b', duration: 5, genre: 'rock' },
];

type updateSong = (id: number, data: Song) => Song | Boolean;

const update: updateSong = (songId, data) => {
  const index = songs.findIndex(({ id }) => id === songId);

  if (index > -1) {
    return (songs[index] = data);
  }

  return false;
};

update(1, { id: 1, title: 'a', duration: 1, genre: 'rock' });
```

```ts
// Any type - domyślnie zmienna nieprzypisana ma typ any
let password: any;

password = 1234; // still any!
password = 'qwerty';

function reverse(input: string | any[]) {
  // ...
}

// Void type - nie zwraca nic

const message: string = 'I know';
const show = (message: string): void => {
  console.log(message);
};
//  --strictNullChecks

show(message);

// Never type - wartość nigdy nie występuje
function error(message: string): never {
  throw new Error(message);
}

function watch(): never {
  while (true) {
    console.log('Watching you!');
  }
}
```
