arrayElements= [2,8,97,57,698,54,57,47]
const totalOfElements= 
arrayElements.reduce((total,element)=>{
    return total+element
},0)
console.log(totalOfElements)

// The way array reduce works is that it takes a callback function and an initial value.
// The callback function takes two parameters, the first one is the accumulator and the second one is the current element.
// The accumulator is the value that is returned from the previous iteration.
// The initial value is the value that is passed to the first iteration.
// The callback function returns the value that is passed to the next iteration.
// The reduce method returns the final value of the accumulator.

// The reduce method is used to reduce the array to a single value.
// The reduce method can be used to find the sum of all the elements in an array.
 