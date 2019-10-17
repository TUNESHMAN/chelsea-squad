function Human(attribute) {
  this.name = attribute.name;
  this.age = attribute.age;
  this.complexion = attribute.complexion;
  this.favoriteFood = attribute.favoriteFood;
}
Human.prototype.eat = function() {
  return ` I love to eat ${this.favoriteFood}`;
};

Human.prototype.speak = function() {
  return ` I am ${this.name}. I am ${this.age} years of age, and i am ${this.complexion} `;
};

function Man(attribute) {
  Human.call(this, attribute);
  this.shoeSize = attribute.shoeSize;
}
Man.prototype = Object.create(Human.prototype);

Man.prototype.run = function() {
  if (this.canRun === true) {
    return `${this.name} : I have covered a long distance!`;
  } else {
    return `${this.name} : I don't know how to run.`;
  }
};

let guy = new Man({
  name: `Babatunde`,
  age: 27,
  complexion: `fair`,
  favoriteFood: `Wheat`,
  canRun: true
});

console.log(guy);
console.log(guy.run());

