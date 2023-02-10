// Asynch Await
// Easier and more cleaner way to use promises
// Async function return promises!!
// Async => Await
// Await keyword waits until a promise is resolved
const fetchNumber = async () => {
    return 25;
}

const consFetchNum= async ()=>{
    console.log(await fetchNumber())
}
consFetchNum()

const consoleTheFetchedNumber= async () => {
    const number = await fetchNumber();
    console.log(`The second way to fetch the number is : ${number}`)
}
consoleTheFetchedNumber()