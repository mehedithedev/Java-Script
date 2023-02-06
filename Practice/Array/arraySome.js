const arr=[1,2,3,4,5,6,7,8,9,10]

// Array Some
const someResult=arr.some((element)=>{
    return element>4  // check if any element on the array is greeter than 4
})
console.log(someResult)

// Array every
const everyResult= arr.every((element_Every)=>{
    return element_Every>2 // checks if every element on the array is greeter than 2
})
console.log(everyResult)

// Both array some and array every accepts only a function