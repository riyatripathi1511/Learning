//callback 
function say_hi(){
  console.log("hi...")
}
function say_hello(){
  console.log("hi...")
}
function add(num1,num2,callback){
  console.log(num1 + num2);
  callback();
}
add(10,20,say_hello)
add(20,40,() => console.log("Bye..")) //most useable