class Human {
  constructor(attribute) {
    this.name = attribute.name;
    this.age = attribute.age;
    this.complexion = attribute.complexion;
    this.favoriteFood = attribute.favoriteFood;
  }
  eat() {
    return ` ${this.name} loves to eat ${this.favoriteFood}`;
  }
  speak() {
    return ` I am ${this.name}. I am ${this.age} years of age, and i am ${this.complexion} `;
  }
}

class Man extends Human {
  constructor(attribute) {
    super(attribute);
    this.shoeSize = attribute.shoeSize;
    this.canRun = attribute.canRun;
  }
  run() {
    if (this.canRun === true) {
      return `${this.name} : I have covered a long distance!`;
    } else {
      return `${this.name} : I don't know how to run.`;
    }
  }
}

class LittleMan extends Man {
  constructor(attribute) {
    super(attribute);
    this.favClub = attribute.favClub;
  }
  fun() {
    return `${this.name} is a ${this.favClub} fan`;
  }
}

let youngBoy = new LittleMan({
  name: `Oluwatoba`,
  age: 21,
  complexion: `fair`,
  favoriteFood: `Salad`,
  canRun: true,
  favClub: `Chelsea`
});

let guy = new Human({
  name: `Babatunde`,
  age: 27,
  complexion: `fair`,
  favoriteFood: `Wheat`
});

let babe = new Man({
  name: `Vivian`,
  age: 26,
  complexion: `dark`,
  favoriteFood: `eba`,
  canRun: false
});

console.log(guy);
console.log(guy.eat());
console.log(guy.speak());
console.log(babe);
console.log(babe.run());
console.log(`${guy.name} loves ${babe.name}`);
console.log(youngBoy);
console.log(youngBoy.run());
console.log(youngBoy.favClub);
console.log(youngBoy.fun());
console.log(youngBoy.eat());
