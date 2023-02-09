// // A class is a collection of properties and methods that are used to create objects.
// // A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
// // The constructor method is called each time the class object is initialized.
// // The class syntax is not introduced in ECMAScript 2015. It is a new feature and part of the ECMAScript 2015 or ES6 specification.
// // The class syntax does not introduce a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
// // The class syntax is just a syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
// // The class syntax is just a syntactical sugar over the existing prototype-based inheritance and does not really add any extra functionality to JavaScript.
// // The class syntax is just a syntactical sugar over the existing prototype-based inheritance and does not really add any extra functionality to JavaScript.
// // A class is a schema for an object that can save many valuses

// // Decalaring an object 
// const person={
//     name: 'John',
//     age: 30,
//     isWorking: true,
// }

// // Decalaring a class
// class Person {
//     constructor(name,age, isWorking)
// }
// The better way of doing this is by using the constructor function instead of the constructor

const carFactoroy= (brand,speed,user,isGoodConditions)=>({brand, speed, user, isGoodConditions})
const factory1= carFactoroy('audi', '200CC', 'Jonas', true)
const factory2= carFactoroy('BMW', '500CC', 'Mark', false)
console.log(factory1)
console.log(factory2)

