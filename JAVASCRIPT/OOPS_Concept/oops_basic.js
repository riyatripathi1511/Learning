//class
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`)
  }
};
const person1 = new Person("John",24)
person1.greet();