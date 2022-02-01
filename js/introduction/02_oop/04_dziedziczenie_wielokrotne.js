/*

Shape
    Rectangle
        Square
    Triangle


*/

function Shape(sideLengths) {
  this._name = '' // konwencja zmiennej prywatnej
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
  // wywołanie func Shape ze słowem this skierowanym na func Rectangle

  // POŻYCZENIE KONSTRUKTORA -> TO NIE JEST DZIEDZICZENIE
  Shape.call(this, [
    sideLengths[0],
    sideLengths[1],
    sideLengths[0],
    sideLengths[1],
  ]) // [20, 10, 20, 10]

  this._name = 'Prostokąt'
}

function Square(sideLength) {
  Rectangle.call(this, [sideLength[0], sideLength[0]])
  this._name = 'Kwadrat'
}

const shape1 = new Square([20])

console.log(shape1)

// console.log(shape1.getPerimeter())
// console.log(shape1.getArea())

// Square { _name: 'Kwadrat', _sideLengths: [ 20, 20, 20, 20 ] }
