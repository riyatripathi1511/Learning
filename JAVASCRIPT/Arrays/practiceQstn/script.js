//8. How do you access the first and last elements of an array?
// let arr = [1,2,3,4,5]
// let firstElement = arr[0]
// console.log("First Element : ", firstElement)

// let lastElement = arr[4]
// console.log("Last Element : ", lastElement)
let arr = [1,2,3,4,5]
console.log(arr.length)  //

console.log("Last Element",arr.length -1)

//9. How do you add and remove element to the end of an array?
// add element
arr.push(6)
console.log("Add element",arr)
// remove elemnt
arr.pop()
console.log("Remove element",arr)

//10. How do you remove an element from an array at a specific index? - using splice method we can do it

arr.splice(2,1) // 2 is index and 1 is no.of items
console.log("Splice",arr)

// 11. How do you concatenate two arrays in JavaScript?
let arr2 = [7,8,9,10]
let result = arr.concat(arr2);
console.log("Concatenate two arrays",result)

/*12. Write a simple JavaScript program to join all elements of the following 
array into a string.
Expected Output:
Red,Green,White,Black
Red+Green+White+Black
*/
let colors = ["Red","Green","White","Black"]

// Join with comma
let joinWithComma = colors.join(",");
console.log("joinWithComma",joinWithComma)

// Join with plus
let joinWithPlus = colors.join("+");
console.log("joinWithPlus",joinWithPlus)

// split function
let char = 'ABCDEF'
let char2 = char.split('')
console.log(char2)


let books =["Physics", "Chemistry", "Maths" , "English", "Hindi"];
books.splice(2,0,"CS");
console.log(books);