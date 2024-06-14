//class
//we have to create object of class using new keyword
//class will accepts three methods ->>
//constructor(object properties)
//normal function -> (instance function) -> objectname.function
//static function => classname.function
class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`)
  }
};
const person1 = new Person("John",24) //instance
console.log(person1)
person1.greet();