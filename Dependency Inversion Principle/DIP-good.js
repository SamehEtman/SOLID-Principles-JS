let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// abstract/interface class
class RelationshipBrowser {
  constructor() {
      // this is an interface it should not be instantiated
    if (this.constructor.name === 'RelationshipBrowser')
      throw new Error('RelationshipBrowser is abstract!');
  }
  // this is an abstract method
  // and it must be implemented in the child class
  getAllChildren(name) {}
}

// Low-Level (Storage)
class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }
  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
    this.data.push({
      from: child,
      type: Relationship.child,
      to: parent,
    });
  }
  getAllChildren(name) {
    const rels = this.data.filter(
      (r) => r.from.name === name && r.type === Relationship.parent
    );
    return rels.map((r) => r.to);
  }
}

// high-level module ( searching )
class Research {
  constructor(browser) {
    for (let p of browser.getAllChildren('John')) {
      console.log(`John has a child named ${p.name}`);
    }
  }
}

let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

// low-level module
let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
