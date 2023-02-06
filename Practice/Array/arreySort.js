// Array Sort
// It sorts strings alphbatically order
// It sorts numbers in ascending order by default
// It sorts numbers in descending order by using reverse() method]
const names= ['Anne', 'Carl', 'Bob', 'Dean']
const sortedNames= names.sort();
console.log(sortedNames);// It's not crucial to save it in a variable
console.log(names)//Both cases same result

const numbers=[5,4,9,6,1,3,0,6,55,99,100,200,999,1200,48]
const sortedNumbers= numbers.sort();
console.log(sortedNumbers);// It's not crucial to save it in a variable

// The default output would be something like this:[
//   0, 1, 100, 1200, 200,
//   3, 4,  48,    5,  55,
//   6, 6,   9,   99, 999
// ]
const updatedSortedNumbers= numbers.sort((a,b)=>{
    return a-b // This code will sort numbers in ascending order by default
})
console.log(updatedSortedNumbers)