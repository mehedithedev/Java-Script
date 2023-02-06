const groceryList=[29,12,45,35,87,100,110]

// To get the summetion using for-each function

// create a variable called total and set the value to 0
// let total= 0;
// groceryList.forEach(element => {
//     // encriment total each time by the value of element in each iteration
//     total +=element
// });

// // The result is here: 
// console.log(total)

// To get the summetion using reduce function
const total=groceryList.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0)
console.log(total)

const numbers= [1,2,3,4,5,6,7,8,9,10]
let sumOfNumbers = 0
numbers.forEach((number)=>{
    sumOfNumbers+=number
})
console.log(`The summetion of number is: ${sumOfNumbers}`)


const newArray= [5,8,7,9,4]
const sumOfNewArray= newArray.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0)
console.log(sumOfNewArray)