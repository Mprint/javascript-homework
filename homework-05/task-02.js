class User {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.followers = obj.followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
    );
  }
}

const mango = new User({ name: 'Mango', age: 2, followers: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({ name: 'Poly', age: 3, followers: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 followers

// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//     );
//   }
// }

// const mango1 = new User('Mango', 2, 20);
// mango1.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly1 = new User('Poly', 3, 17);
// poly1.getInfo(); // User Poly is 3 years old and has 17 followers
