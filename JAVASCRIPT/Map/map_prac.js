// You have an array of user objects with name and age properties.
// Write a function called filterUsersByAge that takes an array of user objects and a minimum age as input,
// and returns an array containing only the users who are older than or equal to the specified minimum age.

// function filterUsersByAge(users, minAge) {
//   return users.filter(user => user.age >= minAge);
// }

// // Example usage:
// const users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
//   { name: 'Dave', age: 20 }
// ];

// const filteredUsers = filterUsersByAge(users, 25);
// console.log(filteredUsers);
// Output: [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 } ]

// practice
// console.log("ex1")
// const array = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = array;

// console.log("first : " + first); 
// console.log("second : " + second);
// console.log("rest : "+rest);

// ex-2
console.log("ex2")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const squaredEvens = numbers
  .filter(number => number % 2 === 0)
  .map(number => number ** 2);

console.log(squaredEvens);

// practice 3
console.log("ex3")
let person = { name: "Alice", age: 25, city: "Wonderland" };
let { name, age, city } = person;

console.log(name);   
console.log(age);      
console.log(city);

// Given an array of user objects, filter out the users who are younger than 18 and return their names in a new array.
console.log("ex4")
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "Dave", age: 16 }
];
let person2 = users.filter((users) => users.age < 18).map((users) => users.name);
console.log(person2)

// Given an array of strings, use map to create a new array where "!" is appended to each string.
console.log("ex5")
const greetings = ["Hello", "Hi", "Greetings"];
const excitedGreetings = greetings.map(greeting => greeting + "!");
console.log(excitedGreetings);

// Given an array of transaction objects, use filter to keep only transactions with an amount greater than 100 and
//  then use map to create a new array of objects 
// containing the transactionId and the amount.

const transactions = [
  { transactionId: "T1", amount: 150, date: "2023-01-01" },
  { transactionId: "T2", amount: 90, date: "2023-02-15" },
  { transactionId: "T3", amount: 200, date: "2023-03-20" },
  { transactionId: "T4", amount: 50, date: "2023-04-10" }
];

const filteredTransactions = transactions
  .filter(transaction => transaction.amount > 100)
  .map(transaction => ({
    transactionId: transaction.transactionId,
    amount: transaction.amount
  }));

console.log(filteredTransactions);
