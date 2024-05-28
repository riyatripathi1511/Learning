// Array destructuring
const user = [1,"David M",["abc@gmail.com","Noida","India"],["Software Engineer",2]];
const[id, name,[email_id,city,country],[designation,experience]] = user
console.log(designation)

// Object destructuring
const person = {
  fullName: "David M",
  age : 25,
  city : "New York"
}
let{fullName: person_name ,  age : person_age, city : person_city} = person;
console.log(person)
console.log(person_city)