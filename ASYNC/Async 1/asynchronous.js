// What is synchronous javascript?

// Synchronous javascript is one in which the code is executed line by line and their tasks are completed instantly when there is not time deley in the completion of the tasks for those lines of code. 

// Synchronous JS example:
const functionOne = ()=>{ 
    console.log('Function one, Part 1') // console.log (functionOne)

    functionTwo() 

    console.log(('Function one , part 2'))
}
// const functionTwo = ()=>{
//     console.log('Function Two')
// }
// Lets create the function two with assync
const functionTwo=()=>{
    setTimeout(() => {
        console.log('Function Two')// this should be executed after 2 seconds after the functionOne 
    }, 2000);
}
functionOne()

// Synchronous usually goes line by line and their tasks are completed instantly when there is not time deley in