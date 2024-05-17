// let number = 10;

// while (number <= 200) {
//   if (number !== 200) {
//     console.log(number + ", ");
//   } else {
//     console.log(number + ".");
//   }
//   number += 10;
// } or 
// let i = 10;
// while(i<=200){
//     console.log(i)
//     i+=10;
// }
// Question 1
// 10,20,30,40,..,200.
// let i = 10
// while(i<=200){
//     if(i<200){
//         document.write(i+",")
//     }
//     else{
//         document.write(i+".")
//     }
//    i += 10
// }

// Question 2
// 105,98,91,....7.

// let j = 105
// while(j >= 7){

// console.log(j)
// j -= 7
// }

// Question 3
// 1. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display 
// an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

/*let num1 = 3
let num2 = -7
let num3 = 2

let product = num1 * num2 * num3
document.write("<br> <br> The sign of the product is ",product)
document.write("<br>" + "<br>")
if(product > 0){
    document.write("The sign is positive");
}else if(product < 0){
    document.write("The sign is negative"+":"+"'-'")
}else{
    console.log("The product is zero",product)
}
*/

// var num1 = 0;
// var num2 = -1;
// var num3 = 4;

// // Sorting the numbers
// if (num1 >= num2 && num1 >= num3) {
//     if (num2 >= num3) {
//         alert(num1 + ", " + num2 + ", " + num3);
//     } else {
//         alert(num1 + ", " + num3 + ", " + num2);
//     }
// } else if (num2 >= num1 && num2 >= num3) {
//     if (num1 >= num3) {
//         alert(num2 + ", " + num1 + ", " + num3);
//     } else {
//         alert(num2 + ", " + num3 + ", " + num1);
//     }
// } else {
//     if (num1 >= num2) {
//         alert(num3 + ", " + num1 + ", " + num2);
//     } else {
//         alert(num3 + ", " + num2 + ", " + num1);
//     }
// }

// let num1 = 0
// let num2 = -1
// let num3 = 4

// if(num1 >= num2 && num1>=num3){
//      if(num2 >= num3){
//         console.log(num1 + "," + num2 + "," + num3)
//      }else{
//         console.log(num1 + "," + num3 + "," + num2)
//      }
// }
// else if(num2 >= num1 && num2 >= num3){
//     if(num1 >= num3){
//         console.log(num2 + "," +num1 +"," + num3)
//     }else{
//         console.log(num2 + "," + num3 + "," + num1)
//     }
// }
// else{
//     if(num1 >= num2){
//         console.log(num3 + "," + num1 + "," + num2)
//     }
//     else{
//         console.log(num3 + "," + num2 + "," + num1)
//     }
// }

// let x = 0
// let y = -1 
// let z = 4

// if(x >= y && x >= z){
//     if(y >=z ){
//         console.log(num1 + "," + num2 + "," + num3)
//     }else{
//         console.log(num1 + )
//     }
// }




// print odd number from odd between 50 to 200
// let num = 50
// while(num<=200){
//     if(num%2!=0){
//         document.write("Odd Number : " + num)
//         document.write("<br>")
//     }
//     num++
// }

// let password 
// while(true){
//     password = prompt("Enter your password")
//      if(password == "1234"){
//         alert("You guess the correct password")
//      }
//      else{
//         alert("Wrong Password");
//      }
// }

// Question
// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive 
// integers.
// let num1 = prompt('Enter a first integer: ');
// let num2 = prompt('Enter a second  integer: ');

// //until both numbers are equal
// document.write("The first number is : " + num1)
// document.write("<br>")
// document.write("The second number is : " + num2)
// document.write( "<br>" );
// document.write("GCD of both the numbers is ")
// while(num1 != num2){
//     if(num1 > num2) 
//         num1 -= num2;
    
//     else 
//         num2 -= num1;
// }
// document.write(num1);

// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Block" instead of the number and for multiples of five print "Buster". For numbers multiples of both three and five print "BlockBuster".
// Write a JavaScript program to sum 3 and 5 multiples under 100.

// document.write("Blockbuster code")

// document.write("<br> <br>")
// let i = 1;
// while(i<=100){
//     if (i % 3 == 0 && i % 5 == 0) {
//         document.write("BlockBuster");
//         document.write("<br>")
//         document.write("<br>")

//     } else if (i % 3 == 0) {
//        document.write("Block");
//        document.write("<br>")
//        document.write("<br>")
//     } else if (i % 5 == 0) {
//         document.write("Buster");
//         document.write("<br>")
//         document.write("<br>")
//     } else {
//        document.write(i);
//        document.write("<br>")
//        document.write("<br>")
//     }
//     i++
// }

// // table of 5
// let num = 5
// for(let i = 1; i<=10;i++){
//     let prod = num  * i
// }
// document.write("product" + prod)

let num = 2;
for(let i = 1; i<=10; i++){
    let table = num * i;
   document.write(num + "*" + i + "=" + table);
   document.write( "<br>");
}

