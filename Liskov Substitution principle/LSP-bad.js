class Rectangle {
  // the _ before the variable name is a convintion
  // that this variable should be private
  // in es6 the # identifier was produced
  // to define private variable but it's not supported
  // in node js still
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  set width(w) {
    this._width = w;
  }
  get width() {
    return this._width;
  }
  set height(h) {
    this._height = h;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width}×${this._height}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
  set width(value) {
    this._width = this._height = value;
  }
  get width() {
    return this._width;
  }
  set height(value) {
    this._width = this._height = value;
  }
  get height() {
    return this._height;
  }
}


const logArea = function(rect)
{
  let width = rect._width;
  rect.height = 10; // set its height to 10
  console.log(
    `Expected area of ${10*width}, ` +
    `got ${rect.area}`
  );
};

let rc = new Rectangle(2,3);
logArea(rc);

let sq = new Square(5);
logArea(sq);