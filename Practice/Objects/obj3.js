// Object.values() creates an array containing the values of an object

// Initialize an object

const session={
    id: 1,
    name: `Mehedi Hasan`,
    time: `26-July-2020`,
    device: 'iPhone',
    browser: 'Chrome'
}

// Create an array containing the values of an object

const values=Object.values(session);

// Print the array

console.log(values);


// Object.entries()  creates a nested array of the key/value pairs of an array

const objectEntries= Object.entries(session)
console.log(objectEntries)