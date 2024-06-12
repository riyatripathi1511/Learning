//ES6 Feature provides arrow function

// normal function
function sum(a , b){
  return a + b;
}
console.log(sum(10,20));


//arrow function 
const sumArr  = (a,b) => {
  return a + b;
}
console.log(sumArr(20,50));

const sumAr = (a,b) => a + b;
console.log(sumAr(40,80))

//num square
 //if you only one parameter then you avoid ()

 const square = num => num * num;
 console.log(square(8))

 const double = x => x * 2;
 console.log(double(10))

 document.addEventListener("click",() => console.log("Event is fired"))  //() is anonymous function which is used at one time