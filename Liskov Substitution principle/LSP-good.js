class Rectangle {
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
class Square  {
  constructor(size) {
    this._size = size;
  }

  set size(value) {
    this._size  = value;
  }
  get size() {
    return this._size;
  }
  get area (){
      return this._size * this._size;
  }
  toString() {
    return `${this._size}×${this._size}`;
  }
}
