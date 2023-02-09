// setInterval(() => {
//     console.log('hello world')
// }, 1000);
// setTimeout(()=>{
//     console.log('Set TimeOut')
// }, 5000)
setTimeout(() => {
    myInterval
}, 2000);
const myInterval = setInterval(()=>console.log('My Interval'), 1000)
// clearInterval(myInterval)