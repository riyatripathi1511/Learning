//OBJECT => key-value pair

// let person = {
//     id : 123,
//     firstname : "David",
//     lastname : "Martin",
//     age : 25
// };

// person.city = "Noida"; // add,insert
// person.age = 28; //update
// delete person.lastname //delete
// console.log(person);

// //Nested Objects
// var user = 
// {
//     id : 123,
//     email : "abc@gmail.com",
//     personalInfo : {
//       fullname : "David R",
//       address : {
//         city : "Noida",
//         country : "India"
//       }
//     }
// }
// console.log(user.personalInfo.fullname)
// console.log(user.personalInfo.address.country)

// !imp  Most important topic 
//HOISTING - pull , declaration

// greet();
// function greet(){
//     console.log("hello...");
// } //function declaration

// say_hello() // not suitable for hoisting
// let say_hello = function(){  //function expression
//    console.log("hello...")
// }

// var x;
// console.log("val of x is "+x)
// var x = 10;

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12
// };
// console.log(student);

// // delete
// delete student.rollno
// console.log(student)


// var student1 = {
//     fullName : "John Doe",
//     age:35,
//     id:1234,
// }
// console.log(student1)
// var student2 = {
//     fullName : "Jane Smith",
//     age :28,
//     id:9765
// }
// console.log(student2)

//Anonymous function

// let say_hello = function(){
//     console.log('Hello World!');
// }
// say_hello();
//Immediately invoked function

// (function(){
//     console.log("Hi...")
// }) ();

// using 'new' keyword  to create an object
// var person = new Object();
// person.f_name = "David";
// person.age = 28;
// console.log(person);

// create multiple objects same method(key) id, fullname, class , age

//After ES6 - Object constructor function

// function Student(fullName,id,standard,age){
//     this.fullName = fullName;
//     this.id = id;
//     this.standard= standard;
//     this.age= age;
// }
// let student1 = new Student('David',123,12,18);
// let student2 = new Student('Micheal',568,10,20);
// student1.city = 'Delhi';
// Student.prototype.nationality = "Indian"; //prototype
// console.log(Student)
// console.log(student1);
// console.log(student2.nationality);


let person = {
    empid : 123,
    "full name" : "David",
    age : 28,
    sayhello(){
        console.log(" Hello...My name is " + this["full name"] + " and I have a " + car.brand + " car. ")
    }
}
let car = {
    brand : "TATA",
    model : "Nano"
}
person.sayhello()

// Array notation and ' . 'notation 