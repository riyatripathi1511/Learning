// let age = 50;
// let age = prompt("Enter your age")
// if(age>=60){
//     // console.log("A person is senior citizen");
//     // document.write("A person is senior citizen");
//     alert("A person is senior citizen")
// }
// else{
//     console.log("A Person is not senior citizen")
// }

// let a = 20;
// let b =10;

// if(b>a){
//     console.log( "A is greater than B")
//  }
// else {
//     console.log("B is greater than A")
// }

// Largest among three greatest number
// let A = 100;
// let B = 70;
// let C = 40;
// if(A>B && A>C){
//   console.log("The largest number is "+A)
// }
// else if(B>A && B>C){
//     console.log("The largest number is "+B);  
// }
// else if(C>A && C>B){
//     console.log("The largest number is "+C)
// }
// else{
//     console.log("None of the number is largest")
// }
// Smallest among three number

// let A = 10;
// let B = 40;
// let C = 60;
// if(A<B && A<C){
//   console.log("The smallest number is "+A)
// }
// else if(B<A && B<C){
//     console.log("The smallest number is "+B);  
// }
// else if(C<A && C<B){
//     console.log("The smallest number is "+C)
// }
// else{
//     console.log("None of the number is smallest")
// }


// Find the second largest number
// let num1 = 10;
// let num2 = 5;
// let num3 = 20;

// let secondLargest;

// if(num1>=num2 && num1>=num3){
//     if(num2>=num3){
//         secondLargest = num2;
//     }
//     else{
//         secondLargest = num3;
//     }
// }
// else if(num2>=num1 && num2>=num3){
//     if(num1 >= num3){
//         secondLargest = num1;
//     }
//     else{
//         secondLargest=num3;
//     }
// }else{
//     if(num1 >=num2){
//         secondLargest=num1;
//     }else{
//         secondLargest=num2;
//     }
// }
// console.log("The second largest number is"+secondLargest);

// let x = 10;
// let y = 25;
// let z =30;

// if(x>y && y<z){
//     console.log("The value of y is second largest");
// }
// else if(y>x && y<z) {
//     console.log("The value of y is second largest");
// }
// else if(z>x  && z > y) {
//     console.log("The value of y is second largest");
// }
// else{
//     console.log("None of the number should be equal")
// }

// eligible for vote or not and has voter id card or not
// let age = 20;
// let haveVoterId ="No";
// if(age >= 18 && haveVoterId =="Yes"){
//     // console.log("Eligible for vote");
//     // document.write("Eligible for vote");
//     alert("Eligible for vote");
// }
// else if(age>=18 && haveVoterId != "Yes"){
//   alert("please get your Id")
// }
// else{
//     console.log("Not Eligible for vote");
//     // document.write("Not Eligible for vote");
//     alert("Not Eligible for vote");
// }

// console.log(7=="7");
// console.log(10+'20');
// console.log(10>10);

// let num=10;
// if(num%2==0){
//     console.log('even no.')
// }
// else{
//     console.log("odd no.")
// }

// for(i=0;i<=10;i++){
//     console.log(i+"Hello Js")
// }

// let i=0;
// while(i<=10){
//     console.log(i+": Hello JS");
//     i++;
// }

// let num =1;
// while(num <= 10){
//     document.write("Hello JS");
//     document.write("<br/>");
//       num = num + 1;
// }

// let num1 = 0;
// while(num1<=10){
//     document.write(num1);
//     document.write("<br/>");
//     num1++; 
// }


let num = 100;
 while(num<=1000){
    if(num%2==0){
        document.write(num);
        document.write("<br/>");
    }
    num++
 }