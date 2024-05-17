// Write a JavaScript program that prints the elements of the following array
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------

let array = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for(let i=0; i<array.length; i++){
   console.log("row" + i);
  for(let j=0; j<array[i].length; j++){
    console.log(" " + array[i][j])
  }
}


// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// let num = [-5,-2,-6,0,-1]
//  let largest = num[0]
// for(let i=1; i<num.length; i++) {
//     if(num[i] > largest){
//         largest = num[i]
//     }
// }
// alert("The largest number is : " + largest)

let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;
if(a>b && a>c && a>d && a>e){
    alert("The number is a:"+a)
}
else if(b>a&&b>c&&b>d&&b>e){
    alert("The number is b:"+b)
}
else if(c>a&&c>b&&c>d&&c>e){
    alert("The number is c:"+c)
}
else if(d>a && d>b && d>c && d>e){
    alert("The number is c:"+d)
}
else{
    alert("The number is e" + e)
}