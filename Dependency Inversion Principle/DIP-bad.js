class Person {
  constructor(name) {
    this.name = name;
  }
}
let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

// Low-Level (Storage)
class Relationships {
  constructor() {
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
}
// high-level module (filtering / searching )
class Research {
  constructor(relationships) {
    const rels = relationships.data.filter(
      (r) => r.from.name === 'John' && r.type === Relationship.parent
    );
    for (let r of rels) {
      console.log(`John is parent of ${r.to.name}`);
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
