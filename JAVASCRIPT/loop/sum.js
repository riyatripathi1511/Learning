// let num = 1;
// let sum = 0;
// while(num<=10){
//     if(num%2==0) {
//         sum = sum + num;
//     }
//     num++
// }
// document.write("The sum of even number upto 10 is : "+sum)


// table of 5
// let num = 5
// for(let i = 1; i<=10;i++){
//     let prod = num  * i
//     document.write(num + "*" + i + "=" + prod)
//     document.write( "<br>")
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

let number = prompt("Enter the number:")
let fact = 1;
 
 for(let i= 1; i<=number; i++){
    fact = fact * i
 }
 console.log(fact)