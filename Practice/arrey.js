const months=['January', 'February', 'March', 'April', 'May', 'June',]
// console.log(months[2])
// for(let i=0; i<months.length; i++){
//     console.log(months[i])
// }
months.forEach((month, i)=>{
    console.log(month, i)
})
// forEach funciton doesn't return any values which is Undefined
// Use when: 
// You want to do something with each element of the arary

// Dont's use when 
// You want to stop or break the loop when some condition is true
//  You're  working with async code

let sum=0; 
const numbers=[65,44,12,4];
numbers.forEach((number)=>{
    sum+=number
})
console.log(sum);