const person = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  hobbies: ['sport', 'technologie'],
  birthdate: new Date(1970, 2, 15),
  married: false,
  salary: 2000,
  sayHello: function () {
    return this.firstName + ' ' + this.lastName
  },
}

// JSON jest obiektem, który ma 2 metody - format wymiany danych

// JSON NIE PRZENOSI FUNKCJI

const personJSON = JSON.stringify(person, null, 4) // 4 spacje wcięcia "indent"

console.log(personJSON)

const personAgain = JSON.parse(personJSON)

console.log(personAgain)

// {
//     "firstName": "Jan",
//     "lastName": "Kowalski",
//     "hobbies": [
//         "sport",
//         "technologie"
//     ],
//     "birthdate": "1970-03-14T23:00:00.000Z",
//     "married": false,
//     "salary": 2000
// {
//   firstName: 'Jan',
//   lastName: 'Kowalski',
//   hobbies: [ 'sport', 'technologie' ],
//   birthdate: '1970-03-14T23:00:00.000Z',
//   married: false,
//   salary: 2000
// }
