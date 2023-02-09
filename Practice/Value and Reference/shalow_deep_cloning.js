const person={
    fname: 'Emma',
    car: {
        brand: "BMW",
        color : 'Blue',
        wheels: 4
    }
}
const newPerson= {
    ...person
}
newPerson.fname= 'Tommy'
console.log(person)
console.log(newPerson)
