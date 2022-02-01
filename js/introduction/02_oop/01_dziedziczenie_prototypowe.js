const arr = [1, 2]

console.log(arr.indexOf(1))

arr.indexOf = function () {
  return false
}

console.log(arr.indexOf(1))
console.log(arr.constructor)
console.dir(arr)

const arr2 = [3, 5]

console.log(arr2.valueOf())

Array.prototype.valueOf = function () {
  return false
}

console.log(arr2.valueOf())

// 0
// false
// [Function: Array]
// [ 1, 2, indexOf: [Function (anonymous)] ]
// [ 3, 5 ]
// false
