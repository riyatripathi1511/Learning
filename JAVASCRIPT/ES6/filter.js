// let arr = [11,20,47,29,12,58,90,4]
// // even number

// let arr2 = arr.filter(val => val%2==0)
//   console.log(arr2);

  // suppose we have one array with multiple objects with same methods name- for eg name and marks, use
  //filter method and access those students whose number is greater than 60
//   let team = [
//     {
//         fullname: "Ram",
//         position: "Software Dev"
//     },
//     {
//         fullname: "DAvid",
//         position: "System Eng"
//     },
//     {
//         fullname: "Rohit",
//         position: "Software Dev"
//     },
//     {
//         fullname: "Aditya",
//         position: "Manager"
//     }
// ];
// let developer = team.filter(val => val.position == "Software Dev");
// console.log(developer);

let student = [
  {
  fullname:"Rohan",
  marks : 40
  },
{
fullname: "Sonal",
marks: 60
},
{
  fullname:"Rihana",
   marks: 89
},
{
  fullname:"Roshan",
   marks: 90
},
{
  fullname:"Rihana",
   marks: 70
}
];
let number = student.filter( val => val.marks>60)
console.log(number)

// Question 
const {x, y : z} ={x:1,y:2};
console.log(z);

const user = {firstname:"john",age:26,city:"New York"};
const{firstname, ...rest} = user;
console.log(rest)

//question-3
const arr = [1,2,3,4,5,6];
const arr1 = [10,20,30,50,...arr];
console.log(arr1)

const person = {
  f_name : "John",
  age : 25,
  address : {
    city : "New York",
    zip : "10001"
  }
}
const {address:{city}} = person;
console.log(city)
