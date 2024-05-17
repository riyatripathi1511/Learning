// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
//  "2 is even"
//  ----------

// for(let i=0; i<=15; i++){
//     if(i%2==0){
//         console.log(i + ' is even');
//     }else{
//         console.log(i + ' is odd');
//     }
// }
// // using function
// console.log("\n")
// console.log("Functions")
// function printOddOrEven(){
//     for(let i =0; i<=15; i++){
//         if(i%2 == 0){
//             console.log(i + ' is even');
//         }else{
//             console.log(i + ' is odd');
//         }
//     }
// } 
// printOddOrEven()



// var a = true + true + true * 3;

// let age = 19;
// let haveVotercard = "No";
// if (age >= 18 && haveVotercard == "yes"){
//     document.write("Elegible for vote");

// } else if (age>=18 && haveVotercard !="yes"){
//     document.write("get your id");
// }
// else{
//     document.write("Not eligible");
// }
// var x = 10; 
// function foo(){ 
//     var x = 5; 
//     console.log(x); 
// } 
// foo(); 
// // console.log(x)
// let a = [1, 2, 3, 4, 5]; 
// let s = a.slice(2,4)
// // console.log(a.slice(2, 4));

// console.log(s)
// var a = "hello";
// var sum = 0; 
// for(var i = 0; i < a.length; i++){ 
//     sum += (a[i] - 'a'); 
// } 
// console.log(sum);

// console.log(NaN === NaN)
// var a = "hello";
// var sum = 0; 
// for(var i=0; i<a.length;i++){ 
//     sum += (a[i] - 'a'); 
// } 
// // console.log(sum);

// console.log(x)
// var x = 10;

// say_hello()
// let say_hello = function(){
//     console.log("hello...")
// }

//Anonymous function

let say_hello = function(){
    console.log('Hello World!');
}
say_hello();
//Immediately invoked function

(function(){
    console.log("Hi...")
}) ();

function add(){
    if(arguments.length == 0){
        console.log('no parameter passed')
    }else {
        let sum = 0;
        for(let i=0; i<arguments.length; i++){
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}
add(1,6,7,89,12)
add();