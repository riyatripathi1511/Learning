// 
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));
//  let person = {
//   age: 25,
//   growOlder: () => {
//     this.age++;
//   }
// };
// person.growOlder();
// console.log(person.age);

// 8. 
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);
console.log(squared);

// let person = {
//   name: 'John',
//   sayHello: function() {
//     let greet = () => Hello, ${this.name};
//     return greet();
//   }
// };
// console.log(person.sayHello())
// 10. 
let obj = {
  value: 10,
  increment: function() {
    let increase = () => this.value++;
    increase();
  }
};
obj.increment();
console.log(obj.value);

const getMax = (a, b) => a > b ? a : b;
console.log(getMax(7, 3));

// 12. 
let person = {
  age: 30,
  growOlder: function() {
    setTimeout(() => {
      this.age++;
      console.log(this.age);
    }, 1000);
  }
};
person.growOlder();