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
  zipCodePattern: /^\d{2}-\d{3}$/,
}

RegExp.prototype.toJSON = function () {
  return this.source
}

const personJSON = JSON.stringify(
  person,
  function (k, v) {
    return v
  },
  4
)

console.log(personJSON)

const personAgain = JSON.parse(personJSON, function (k, v) {
  if (k === 'birthdate') {
    return new Date(Date.parse(v))
  }

  if (k === 'zipCodePattern') {
    return new RegExp(v)
  }

  return v
})

console.log(personAgain)

// ---
// firstName
// Jan
// ---
// lastName
// Kowalski
// ---
// hobbies
// [ 'sport', 'technologie' ]
// ---
// 0
// sport
// ---
// 1
// technologie
// ---
// birthdate
// 1970-03-14T23:00:00.000Z
// ---
// married
// false
// ---
// salary
// 2000
// ---
// sayHello
// [Function: sayHello]
// ---
// zipCodePattern
// /^\d{2}-\d{3}$/
// ---

// - - - - - - - - - - - - - - -

// {
//     "firstName": "Jan",
//     "lastName": "Kowalski",
//     "hobbies": [
//         "sport",
//         "technologie"
//     ],
//     "birthdate": "1970-03-14T23:00:00.000Z",
//     "married": false,
//     "salary": 2000,
//     "zipCodePattern": "^\\d{2}-\\d{3}$"
// }
// {
//   firstName: 'Jan',
//   lastName: 'Kowalski',
//   hobbies: [ 'sport', 'technologie' ],
//   birthdate: 1970-03-14T23:00:00.000Z,
//   married: false,
//   salary: 2000,
//   zipCodePattern: /^\d{2}-\d{3}$/
// }
