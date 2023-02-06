// // JavaScript differnetiates data types on: 
// // Primitive valuse (number, string, boolean)
// // Complex values (objects, arrays)



// let x = 1;
// let y= x; // 1
// x=2;
// console.log(x,y)

// let firstPerson='Mark'
// let secondPerson= firstPerson
// firstPerson= 'Austin'
// console.log(firstPerson) // Austin
// console.log(secondPerson) // Mark
// const animals = ['dogs', 'cats']
// const otherAnimals = animals

// animals.push('llamas')
// console.log(animals)
// console.log(otherAnimals)
const person={
    firstName: 'John',
    lastName: 'Snow',
}
const otherPerson= person
person.firstName='Johnny'
console.log(person)
console.log(otherPerson)