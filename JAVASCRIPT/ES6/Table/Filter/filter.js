//Filter in array

let arr = [10,5,3,80,7,50,43,12,45];
//result = [80,50,43,12,45]

let newarr = arr.filter(function(val){
 return val > 10;
});
console.log(newarr);
//number less than 10
let result = arr.filter(val => val < 10).sort()
console.log(result)