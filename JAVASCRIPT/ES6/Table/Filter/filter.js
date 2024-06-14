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

//object - cmd+shift + L

let student = [
 {
  std_name :"Ram",
 std_city : "Ayodhya"
},
{
  std_name :"Sam",
std_city : "Noida"
},
{
  std_name :"Tom",
std_city: "Noida"
},
{
  std_name :"Kammo ji",
  std_city: "Ghaziabad"
}
];
let std_noida = student.filter(val => val.std_city == "Noida")
console.log(std_noida)

// map function
console.log("Map function")
let arrMap = [1,2,3,4,5];
// result = [2,4,6,8.10]

let newMap = arrMap.map((value) => value * 2);
console.log(newMap)