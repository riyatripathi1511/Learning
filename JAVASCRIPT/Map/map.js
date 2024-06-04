MAP - method (predefine)

let arr1 = [1, 2, 3, 4, 5];
result = [2,4,6,8,10];

let newarr = arr1.map((value) => value * 2);
console.log(newarr);


const students = [
  { name: "Alice", scores: { math: 85, english: 78 } },
  { name: "Bob", scores: { math: 92, english: 88 } },
  { name: "Charlie", scores: { math: 72, english: 95 } },
  { name: "David", scores: { math: 90, english: 80 } }
];

// let stdMathTop = students.filter(values => values.scores.math > 80);
// console.log(stdMathTop);
// let stdMathTopName = stdMathTop.map(std => std.name);
// console.log("Name of Students whos numbers above 80 :" + stdMathTopName);

let topStudent = students.filter(({ scores: { math } }) => math > 80).map(({ name }) => name);
console.log(topStudent); //newArray

//////////////////////////////////////////////////////////////////////////////////////////////

//COOKIES :

document.cookie = "item=watch";
document.cookie = "location= Delhi;expires=Sun 2 June 2024 12:00:00 UST";