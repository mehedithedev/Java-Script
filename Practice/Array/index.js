// Searching for a Substring in a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/searching-for-a-substring-in-a-string
const hobbies='I love programming , React and JavaScript. React is also great.';

const indexOFP=hobbies.indexOf('React')
// console.log(indexOFP)
// console.log(hobbies.firstindexof('React', 0))
// console.log(hobbies.lastindexof('React', 0))
// let firstIndex=hobbies.firstIndex('React')

// lastIndex of a substring

let lastIndex=hobbies.lastIndexOf('React')
console.log( lastIndex)

// includes the first index
let includes=hobbies.includes('programming')

console.log(includes)

// startsWith and endsWith

let startsWith=hobbies.startsWith('I')
console.log(startsWith)

let endsWith=hobbies.endsWith('.')
console.log(endsWith)


// Slice method

const exampleString= 'hotdogs'
const dog= exampleString.slice(3, exampleString.length)
console.log(dog)

// Split method.. splits the string into an array  split() method


const exampleString2= 'The quick brown fox jumps over the lazy dog'

let splittedArrey=exampleString2.split(' ')
console.log(splittedArrey)

// reverse a string
const exampleString3='test'  // output shoule be: tset
const reversedString= exampleString3.split('').reverse()
// reverse() wont work with string it only works with array


console.log(reversedString)

const stringReverse= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let arreyOfString= stringReverse.split('')
console.log("IT's all about the new challange")

const guestList= `Our guest are : emma, john, jane, jakov, ethan`
lenghtOfGuestList=guestList.length
console.log(`The length of guest list is ${lenghtOfGuestList} guest`)
upperGuestlist=guestList.toUpperCase()
console.log(upperGuestlist)
const isEthanOnThelist= upperGuestlist.includes('ETHAN')
console.log(isEthanOnThelist)
const substracticngGusetsList= upperGuestlist.slice( 16 )
console.log(substracticngGusetsList)

// Create an array of substractingGustsList
arrayOfGuestsList=substracticngGusetsList.split(',')
console.log(arrayOfGuestsList)

const numbers= [1,2,3,4,5,6,7,8,9]
console.log(numbers.includes(9))

console.log(...numbers)

// Arrey finds
