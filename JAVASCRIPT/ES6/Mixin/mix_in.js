// Mixin
let usefulMethod = {
  sayHi(){
    console.log("Hi...")
  },
  sayBye(){
    console.log("Bye...")
  }
}
let dailyRoutine = {
  eatBreakfast(){
    console.log("chai paratha ^_^")
  },
  eatlunch(){
   console.log("dal rice :)")
  },
  eatDinner(){
    console.log("roti sabji :|")
  }
}
class user{
  constructor(){
    this.name = "John";
  }
}
class admin extends user{

}
Object.assign(admin.prototype,usefulMethod,dailyRoutine); //mix-in 
let user1 = new admin();
console.log(user1);
user1.sayBye();
user1.eatlunch();
user1.eatDinner();