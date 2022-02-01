function Person(firstName, lastName) {
  this.fName = firstName
  this.lName = lastName
}

Object.prototype.sayHello = function () {
  return this.fName + ' ' + this.lName
}

const person1 = new Person('Jan', 'Kowalski')
const person2 = new Person('Tomasz', 'Nowak')

console.dir({ person1, person2 })
console.log([].sayHello())

const arr = []
arr.fName = 'Tablica'
arr.lName = 'Nowakowska'

// 1. Czy arr ma object sayHello -> nie ma
// 2. Array prototype -> nie ma
// 3. Object prototype -> ma -> wywołanie
console.log(arr.sayHello())

// {
//   person1: Person { fName: 'Jan', lName: 'Kowalski' },
//   person2: Person { fName: 'Tomasz', lName: 'Nowak' }
// }
// undefined undefined
// Tablica Nowakowska
