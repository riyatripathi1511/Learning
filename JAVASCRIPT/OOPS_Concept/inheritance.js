//INHERITANCE - multilevel inheritance supports here
class emp{
  constructor(n){
    this.name = n;
  }
}
class manager extends emp{
  constructor(n,d){
    super(n);
    this.department = d;
  }
}
let mng = new manager("John", "web dev");
console.log(mng);

//create a parent class with two property and create a function inside here, then create a child 
//with department property, create subchild class

class employee{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  func(){
    console.log(`Hello, My name is ${this.name} and my age is ${this.age} and my role is ${this.role}.`)
  }
}
class manager_ji extends employee{
  constructor(name,age,role){
    super(name,age);
    this.role = role;
    super.func();
  }
}
class team_lead extends manager_ji{
   
}
let manager1 = new manager_ji("Riya",23,"Java Developer")
console.log(manager1)

let manager2 = new team_lead("Tabasum Nisha",23,"Java Developer")
console.log(manager2)