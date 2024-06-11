// 1. 
// const [a, , b] = [10, 20, 30];
// console.log(a, b)
//What will be logged to the console?10 2010 30undefined 30undefined undefined.

// 2. 
// const [a = 5, b = 7] = [1];
// console.log(a, b);
// What will be logged to the console?1 71 undefined5 75 undefined.

// 3. 
// const {a: x, b: y} = {a: 10, b: 20};
// console.log(x, y);
// What will be logged to the console?10 2020 10undefined undefinedundefined 20

// 4. 
// const [a, ...rest] = [1, 2, 3, 4];
// console.log(a, rest);
// What will be logged to the console?1 [2, 3, 4]1 [3, 4]1 21 [1, 2, 3, 4].

// 5. 
const {a, ...rest} = {a: 1, b: 2, c: 3};
console.log(a, rest);
// What will be logged to the console?1 {b: 2, c: 3}1 {c: 3}1 {a: 1, b: 2, c: 3}1 {}.

// 6. 
// function getData() {
//   return {
//     name: 'John',
//     info: {
//       age: 30,
//       address: '123 Main St'
//     }
//   };
// }

// const {
//   name,
//   info: { age, address }
// } = getData();

// console.log(name, age, address);
// What will be logged to the console?John 30 123 Main StJohn undefined undefinedundefined 30 123 Main StJohn 30 undefined.

// 7. 
const strings = ['apple', 'banana', 'cherry'];
const filteredStrings = strings
  .filter(str => str.includes('a'))
  .map(str => str.toUpperCase());
console.log(filteredStrings);
// What will be logged to the console?['apple', 'banana', 'cherry']['APPLE', 'BANANA']['banana']['APPLE', 'BANANA', 'CHERRY'].

// 8. 
// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 800 }
// ];
// const result = products
//   .filter(product => product.price > 600)
//   .map(product => product.name);
// console.log(result);
// What will be logged to the console?['Laptop', 'Phone', 'Tablet']['Laptop', 'Tablet']['Laptop']['Phone', 'Tablet'].

// 9. 
// const values = [0, 1, false, 2, '', 3, null];
// const result = values.filter(Boolean);
// console.log(result);
// What will be logged to the console?[0, 1, false, 2, '', 3, null][1, 2, 3][0, false, '', null][false, '', null].

// 10.
 const nestedArray = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
const result = nestedArray
  .filter(arr => arr.length > 2)
  .map(arr => arr.length);
console.log(result);
// What will be logged to the console?[3, 2, 4][2, 4][3, 4][1, 3, 4].