// Tylko na func można używać "new"
// tablica asjocacyjna -> klucz - wartość

function Person(firstName, lastName) {
  this.fName = firstName
  this.lName = lastName

  // ta funkcja została zapisana w pamięci komputera
  // tworzy się z każdym obiektem
  this.sayHello = function () {
    return this.fName + ' ' + this.lName
  }
}

const person1 = new Person('Jan', 'Kowalski') // to zawsze jest obiekt
const person2 = new Person('Tomasz', 'Nowak')

console.log({ person1, person2 })
console.log(person1.sayHello())
console.log(person1 instanceof Person)

// {
//   person1: Person {
//     fName: 'Jan',
//     lName: 'Kowalski',
//     sayHello: [Function (anonymous)]
//   },
//   person2: Person {
//     fName: 'Tomasz',
//     lName: 'Nowak',
//     sayHello: [Function (anonymous)]
//   }
// }
// Jan Kowalski
// true
