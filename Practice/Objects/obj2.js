// Object constructor
// Static method using Object.keys()

const employees={
    boss: 'Michael',
    secretery: 'Pam',
    sales: 'Jim'
}

const positions= Object.keys(employees)
console.log(positions)

const person= Object.values(employees)
console.log(person)

// Object entries


// Creates pair of arreys with both keys and values in each array
const entriesOfArray= Object.entries(employees)
console.log(entriesOfArray)

// Object.freeze() prevents all the modifications
// Prevents properties from being removed or added
const user={
    username: "John",
    password: '15664'
}
const admin= Object.freeze(user)
admin.password='8784'
admin.username='newUser'
console.log(admin)


// Object.Seal() prevents new properties
// From being added to an object
// But allows the modification of existing properties.
const sealedObject= Object.seal(user)
sealedObject.password='newPassword'
sealedObject.active=true
sealedObject.username='Mehedi'
console.log(sealedObject)
