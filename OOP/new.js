// The 'new' keyword which creates a new object
const person=  {};
const person1= new Object();

person.firstName='John' 
person.lastName= 'Doe'
console.log(person);
console.log(person1)

const arr= [1,2,3]
const arr1= new Array(1,2,3)
console.log(arr,arr1)

const myDate= new Date()
console.log(myDate.getHours())

console.log(Array)
console.log(Object)
console.log(Number)
console.log(String)
console.log(Boolean)    
console.log(Function)
console.log(Date)

// When we use 'new' keyword in front of them it will create a new object
console.log(new Array)
console.log(new Object)
console.log(new Number)
console.log(new String)
console.log(new Boolean)    
console.log(new Function)
console.log(new Date)