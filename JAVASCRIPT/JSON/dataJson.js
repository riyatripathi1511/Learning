let student = `{
  "name" : "John",
  "age" : 23,
  "is_student" : true,
  "passport_no." : null,
  "p_language" : ["C","C++","JAVA"],
  "address" : {
    "city" : "Noida",
    "Country" : "India",
    "pin_code" : 201301,
    "state":"UP"

  }
}`
let std = JSON.parse(student);
// stringify - > object to string
//parse -> string to object
console.log(std)

let school = {
  st_name : "Rohan",
  st_class : 4,
  st_section:"B"
}
console.log(school,"OBJECT")
console.log(JSON.stringify(school))

// console.log(student,"JSON")
// let std = JSON.parse(student);
// console.log(std,"Object")
