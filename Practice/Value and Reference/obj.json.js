const person={
    fname: 'Emma',
    car: {
        brand: "BMW",
        color : 'Blue',
        wheels: 4
    }
}

const deepClone= JSON.parse(JSON.stringify(person))
// Use  JSON.stringify and JSON.parse to change any element of an object without changing it's initial state


deepClone.fname= 'Mia'
deepClone.car.color='Red'

console.log(person)
console.log(deepClone)
