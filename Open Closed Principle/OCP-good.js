class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ColorFilter {
  constructor(color) {
    this.criteria = color;
  }
  isOk(item) {
    return item.color === this.criteria;
  }
}
class SizeFilter {
  constructor(size) {
    this.criteria = size;
  }
  isOk(item) {
    return item.size === this.criteria;
  }
}
class AndFilter {
  constructor(...filters) {
    this.criterias = filters;
  }
  isOk(item) {
    return this.criterias.every((f) => f.isOk(item));
  }
}
class ProductFilter {
  filter(products, xFilter) {
    return products.filter((p) => xFilter.isOk(p));
  }
}

const pf = new ProductFilter();
let apple = new Product('Apple', 'green', 'small');
let tree = new Product('Tree', 'green', 'large');
let house = new Product('House', 'blue', 'large');

let products = [apple, tree, house];
console.log(`Only green \n`)

const filterByGreen  = new ColorFilter('green')
const filteredProducts = pf.filter(products , filterByGreen);
for (let p of filteredProducts){
    console.log(`# ${p.name} is green`)
}

console.log(`\n green and large \n`)
for (let p of pf.filter(products , new AndFilter(
    new ColorFilter('green') , new SizeFilter('large')
))){
    console.log(`# ${p.name} is green and large`)
}