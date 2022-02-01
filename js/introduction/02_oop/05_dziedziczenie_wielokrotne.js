/*

Shape
    Rectangle
        Square
    Triangle


*/

function Shape(sideLengths) {
  this._name = ''
  this._sideLengths = sideLengths
}

Shape.prototype.getPerimeter = function () {
  return this._sideLengths.reduce(function (prevVal, val) {
    return prevVal + val
  })
}

Shape.prototype.getArea = function () {
  return this._sideLengths[0] * this._sideLengths[1]
}

function Rectangle(sideLengths) {
  Shape.call(this, [
    sideLengths[0],
    sideLengths[1],
    sideLengths[0],
    sideLengths[1],
  ])

  this._name = 'Prostokąt'
}

// nowy obiekt
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

function Square(sideLength) {
  Rectangle.call(this, [sideLength, sideLength])
  this._name = 'Kwadrat'
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

function Triangle(sideLength) {
  Shape.call(this, [sideLength, sideLength, sideLength])

  this._name = 'Trójkąt'
}

// To kieruje -> na to
// Triangle.prototype = Shape.prototype

Triangle.prototype = Object.create(Square.prototype)
Triangle.prototype.constructor = Triangle

// Jest to referencja, więc nadpisujemy oryginalną metodę
Triangle.prototype.getArea = function () {
  const a = this._sideLengths[0] // mogę tego użyć, bo dziedziczę

  // 1. Zwróci primitives number
  // 2. toFixed zamieni go na object
  // 3. dzięki temu znajdziemy tam metodę toFixed
  // 4. toFixed zwraca str, przez dodanie + zmieniamy na number
  return +((a * a * Math.sqrt(3)) / 4).toFixed(2)
}

const square = new Square(20)
const triangle = new Triangle(20)
const rectangle = new Rectangle([20, 10])

console.log(square.getPerimeter())
console.log(square.getArea())

console.log(triangle.getPerimeter())
console.log(triangle.getArea())

// Mają ten sam prototyp, więc dziedziczą
// console.log(shape1 in  stanceof Shape)
// console.log(shape1 instanceof Triangle)

// 80
// 400
// 60
// 173.21
