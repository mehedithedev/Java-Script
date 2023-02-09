// For in loop on js object
for (let variable in object){
    // Code to be executed
}
const person={
    fname: 'John',
    lname: 'Doe',
    age: 25
}
let text=''
for (let key in person){
   
    console.log( text+=person[key]+ " ")
}