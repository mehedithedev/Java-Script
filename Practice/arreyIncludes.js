const pets = ["cat", 'dog', 'rat']
let isThatIncludes= pets.includes('cat')
console.log(isThatIncludes)

const bookShelf=['Mobby Dick', 'the great gatsby', 'pride and prejuds']
if (bookShelf.includes('Mobby Dick')){
    console.log('We have that book')
} else {
    console.log('Sorry! That book is not available')
}